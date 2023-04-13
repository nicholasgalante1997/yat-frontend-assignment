export type Pod = {
  name: string;
  description: string;
  stats: Stats;
  tokens: Token[];
};

export type Stats = {
  floorPrice: Price;
  owners: number;
  tokens: number;
  volume: Volume;
};

export type Token = {
  asset: ImageAsset;
  collection: CollectionMeta;
  owner: Owner;
  transaction: Transaction;
};

type ImageAsset = {
  id: string;
  url: string;
};
type CollectionMeta = {
  name: string;
};
type Owner = {
  twitter: string;
  yat: string;
};
type Transaction = {
  amount: number;
  currency: string;
  date: string;
};
type Price = { current: number };
type Volume = {
  daily: number;
  weekly: number;
  monthly: number;
};
