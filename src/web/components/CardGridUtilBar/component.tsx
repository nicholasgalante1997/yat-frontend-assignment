import React from 'react';
import { Icon } from '../Icons';
import { Input } from '../Input';
import { CardGridRow, CardGridUtilBarWrapper, CollectionTitle, Grouping } from './view';
import {
  useBannerCtx,
  useGetTokensCtxFilterOnOwned,
  useGetTokensCtxSearchTerm,
  useGetTokensCtxSortCrit,
  useTokensCtxMutation,
} from '../../contexts';
import { SortToggle } from '../SortToggle';
import { Badge } from '../Badge';

type CardGridUtilBarProps = {
  collection: { name: string };
};

export const CardGridUtilBar = React.memo(function (props: CardGridUtilBarProps) {
  const {
    collection: { name },
  } = props;
  const searchTerm = useGetTokensCtxSearchTerm();
  const sortBy = useGetTokensCtxSortCrit();
  const filterOnOwnedTokens = useGetTokensCtxFilterOnOwned();
  const { mutateSearchTerm, mutateSortBy, mutateOwnedTokensOnly } = useTokensCtxMutation();
  const { dispatchBanner } = useBannerCtx();

  function toggleOtherFiltersPrecursor() {
    dispatchBanner({
      background: '#523DF1',
      bannerText: "I'm sure this feature's coming soon!",
      id: 'sample-banner-context',
    });
  }
  return (
    <CardGridUtilBarWrapper tabIndex={1}>
      <CardGridRow tabIndex={1}>
        <CollectionTitle tabIndex={1}>{name}</CollectionTitle>
        <Input
          withSearchIcon
          value={searchTerm}
          placeholder="'8976' or 'TokenStars'..."
          suppliedOnChange={mutateSearchTerm}
        />
      </CardGridRow>
      <CardGridRow tabIndex={1}>
        <Grouping tabIndex={1}>
          <SortToggle />
          <Badge active={sortBy === 'recency'} onClick={() => mutateSortBy('recency')}>
            Recency
          </Badge>
          <Badge active={sortBy === 'price'} onClick={() => mutateSortBy('price')}>
            Price
          </Badge>
        </Grouping>
        <Grouping tabIndex={1}>
          <Badge active={!!filterOnOwnedTokens} onClick={() => mutateOwnedTokensOnly(true)}>
            Owned
          </Badge>
          <Badge active={!filterOnOwnedTokens} onClick={() => mutateOwnedTokensOnly(false)}>
            All
          </Badge>
          <Badge active={true} onClick={() => toggleOtherFiltersPrecursor()}>
            <Icon type="caret-down" />
            &nbsp; More Filters
          </Badge>
        </Grouping>
      </CardGridRow>
    </CardGridUtilBarWrapper>
  );
});
