import React, {
  createContext,
  memo,
  useContext,
  useEffect,
  useState,
} from 'react';
import isEqual from 'lodash.isequal';
import debounce from 'lodash.debounce';
import { Token } from '../../types';

// manage token card info here after pulled from react-query
// accept Token[] as a prop
// manage filters,searches,and sorts on it here
// that way react-query stays unmutated and can continuously fetch and update in the background

export type TokenCardContext = {
  aggregateTokenItems: Token[];
  mutVisibleTokenItems: Token[];
  ownedTokensOnly?: boolean;
  mutateOwnedTokensOnly(b: boolean): void;
  searchTerm?: string | undefined;
  mutateSearchTerm: React.ChangeEventHandler<HTMLInputElement>;
  sort?: 'ascending' | 'descending';
  mutateSort(newSortCrit: 'ascending' | 'descending' | undefined): void;
  sortBy?: 'price' | 'recency';
  mutateSortBy(newSortByCrit: 'price' | 'recency'): void;
};

/** this object is ultimately overwritten before providing state to any orthagonal component
 * we can assign createContext this value to satisfy instantiating the context,
 * while still creating the context outside its Functional Component Provider,
 * since instantiating context in FCs is an antipattern for export hook patterns
 */
const defaults: TokenCardContext = {
  aggregateTokenItems: [],
  mutVisibleTokenItems: [],
  mutateSearchTerm(inputChangeEvent) {
    /** eslint-disable no-empty-functions */
  },
  mutateSort(newSortCrit) {
    /** eslint-disable no-empty-functions */
  },
  mutateSortBy(newSortByCrit) {
    /** eslint-disable no-empty-functions */
  },
  mutateOwnedTokensOnly(b) {
    /** eslint-disable no-empty-functions */
  },
};

const TokenCardContext = createContext<TokenCardContext>(defaults);

export const useGetVisibleTokensCtx = () =>
  useContext(TokenCardContext).mutVisibleTokenItems;

export const useGetTokensCtxSearchTerm = () =>
  useContext(TokenCardContext).searchTerm;
export const useGetTokensCtxFilterOnOwned = () =>
  useContext(TokenCardContext).ownedTokensOnly;
export const useGetTokensCtxSortCrit = () =>
  useContext(TokenCardContext).sortBy;
export const useGetTokensCtxSortDir = () => useContext(TokenCardContext).sort;

export const useTokensCtxMutation = () => {
  const { mutateOwnedTokensOnly, mutateSearchTerm, mutateSort, mutateSortBy } =
    useContext(TokenCardContext);
  return {
    mutateOwnedTokensOnly,
    mutateSearchTerm,
    mutateSort,
    mutateSortBy,
  };
};

type TokenCardContextProviderProps = {
  tokens: Token[];
  initialSearchTerm?: string;
  initialSortDir?: 'ascending' | 'descending';
  initialSortByCrit?: 'price' | 'recency';
  initialOwnedTokensOnly?: boolean;
  children: React.ReactNode | React.ReactNode[] | JSX.Element | JSX.Element[];
};

export const MemoizedTokenCardContextProvider = memo(function ({
  children,
  tokens,
  initialOwnedTokensOnly = false,
  initialSearchTerm,
  initialSortByCrit = 'price',
  initialSortDir = 'ascending',
}: TokenCardContextProviderProps) {
  const [allTokensNonMut, setAllTokensNonMut] = useState<Token[]>(tokens);
  const [searchTerm, setSearchTerm] = useState<string | undefined>(
    initialSearchTerm
  );
  const [sortDir, setSortDir] = React.useState<
    'ascending' | 'descending' | undefined
  >(initialSortDir);
  const [sortBy, setSortBy] = React.useState<'price' | 'recency' | undefined>(
    initialSortByCrit
  );
  const [ownedTokensOnly, setOwnedTokensOwnly] = React.useState<
    boolean | undefined
  >(initialOwnedTokensOnly);
  const [visibleTokens, setVisibleTokens] = useState<Token[]>(
    getVisibleTokens()
  );

  function getVisibleTokens(): Token[] {
    /** filter fn */
    function filterOnSearchTermOrOwnershipCrit() {
      return allTokensNonMut.filter((tokenItem) => {
        const { asset, collection, owner, transaction } = tokenItem;

        // conditions
        const hasOwnedTokensFilter = !!ownedTokensOnly;
        const hasSearchCriteria = !!searchTerm && searchTerm !== '';

        if (hasOwnedTokensFilter && hasSearchCriteria) {
          return !!owner.twitter && asset.id.toString().includes(searchTerm);
        }
        if (hasOwnedTokensFilter) {
          return !!owner.twitter;
        }
        if (hasSearchCriteria) {
          return asset.id.toString().includes(searchTerm);
        }
        return true;
      });
    }

    // util for ease of comparison
    function comparator(
      a: number | string | Date,
      b: number | string | Date
    ): 1 | -1 | 0 {
      if (a === b) return 0;
      if (a < b) return -1;
      if (a > b) return 1;
      return -1; // default to same order
    }

    // sort comparator
    function sort(a: Token, b: Token) {
      if (sortDir === 'ascending') {
        if (sortBy === 'price') {
          return comparator(a.transaction.amount, b.transaction.amount);
        } else {
          return comparator(
            new Date(a.transaction.date),
            new Date(b.transaction.date)
          );
        }
      } else {
        if (sortBy === 'price') {
          return comparator(b.transaction.amount, a.transaction.amount);
        } else {
          return comparator(
            new Date(b.transaction.date),
            new Date(a.transaction.date)
          );
        }
      }
    }

    return filterOnSearchTermOrOwnershipCrit().sort(sort);
  }

  const memoizedUpdateVisibleTokens = React.useCallback(
    debounce(function () {
      setVisibleTokens(getVisibleTokens());
    }, 100),
    [searchTerm, sortBy, sortDir, ownedTokensOnly]
  );

  useEffect(() => {
    memoizedUpdateVisibleTokens();
  }, [searchTerm, sortBy, sortDir, ownedTokensOnly]);

  useEffect(() => {
    if (!isEqual(allTokensNonMut, tokens)) {
      setAllTokensNonMut(tokens);
    }
  }, [tokens]);

  function mutateSearchTerm(
    inputChangeEvent: React.ChangeEvent<HTMLInputElement>
  ) {
    setSearchTerm(inputChangeEvent.target.value);
  }

  function mutateSort(newSortCrit: 'ascending' | 'descending' = 'ascending') {
    setSortDir(newSortCrit);
  }

  function mutateSortBy(newSortCrit: 'price' | 'recency' = 'price') {
    setSortBy(newSortCrit);
  }

  function mutateOwnedTokensOnly(ownedTokensOnly = false) {
    setOwnedTokensOwnly(ownedTokensOnly);
  }

  const localStateManagedContextValues: TokenCardContext = {
    aggregateTokenItems: allTokensNonMut,
    mutVisibleTokenItems: visibleTokens,
    mutateOwnedTokensOnly,
    mutateSort,
    mutateSearchTerm,
    mutateSortBy,
    searchTerm,
    ownedTokensOnly,
    sort: sortDir,
    sortBy,
  };

  return (
    <TokenCardContext.Provider value={localStateManagedContextValues}>
      {children}
    </TokenCardContext.Provider>
  );
});
