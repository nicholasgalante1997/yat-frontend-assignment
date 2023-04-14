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
    <CardWrapper>
      <CardWrapperInnerContent>
        <TimestampBadge>
          <TimestampLabel>1h Ago</TimestampLabel>
        </TimestampBadge>
        <CardImage src={asset.url} alt={'YAT Pod ID ' + asset.id} />
        <TransactionBadge>
          <TransactionBadgeText>Bought </TransactionBadgeText>
          <Icon type="ethereum" />
          <TransactionBadgeText>{transaction.amount}</TransactionBadgeText>
        </TransactionBadge>
        <CardAssetInfoContainer>
          <AssetID>{asset.id}</AssetID>
          <CollectionName>{collection.name}</CollectionName>
        </CardAssetInfoContainer>
        <OwnerBar>
          <YatUserBadge padTwitterHandle={!!owner.twitter}>
            <YatBadge>{owner.yat}</YatBadge>
            {owner.twitter && <TwitterHandle>@{owner.twitter} </TwitterHandle>}
          </YatUserBadge>
        </OwnerBar>
      </CardWrapperInnerContent>
    </CardWrapper>
  );
});
