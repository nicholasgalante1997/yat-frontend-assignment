import React from 'react';
import { Token } from '../../types';
import { Icon } from '../Icons';
import {
  CardImage,
  CardWrapper,
  CardWrapperInnerContent,
  CardAssetInfoContainer,
  AssetID,
  CollectionName,
  OwnerBar,
  TwitterHandle,
  TransactionBadge,
  TransactionBadgeText,
  TimestampBadge,
  TimestampLabel,
  YatBadge,
  YatUserBadge,
} from './views';

export type TokenCardProps = Token;

export const TokenCard = React.memo(function (props: TokenCardProps) {
  const { asset, collection, owner, transaction } = props;
  return (
    <CardWrapper tabIndex={1}>
      <CardWrapperInnerContent tabIndex={1}>
        <TimestampBadge tabIndex={1}>
          <TimestampLabel>1h Ago</TimestampLabel>
        </TimestampBadge>
        <CardImage tabIndex={1} src={asset.url} alt={'YAT Pod ID ' + asset.id} />
        <TransactionBadge role="badge" aria-label="Transcation Badge for Pod" tabIndex={1}>
          <TransactionBadgeText>Bought </TransactionBadgeText>
          <Icon type="ethereum" />
          <TransactionBadgeText>{transaction.amount}</TransactionBadgeText>
        </TransactionBadge>
        <CardAssetInfoContainer tabIndex={1}>
          <AssetID tabIndex={1}>{asset.id}</AssetID>
          <CollectionName tabIndex={1}>{collection.name}</CollectionName>
        </CardAssetInfoContainer>
        <OwnerBar tabIndex={1}>
          <YatUserBadge tabIndex={1} padTwitterHandle={!!owner.twitter}>
            <YatBadge tabIndex={1}>{owner.yat}</YatBadge>
            {owner.twitter && <TwitterHandle>@{owner.twitter} </TwitterHandle>}
          </YatUserBadge>
        </OwnerBar>
      </CardWrapperInnerContent>
    </CardWrapper>
  );
});
