interface IMiningInfo {
  name: string;
  link: string;
  address: string;
}

interface IBlock {
  hash: string;
  height: number;
  mainchain: boolean;
  previous: string;
  time: number;
  version: number;
  bits: number;
  nonce: number;
  size: number;
  merkle: string;
  subsidy: number;
  fees: number;
  outputs: number;
  work: number;
  weight: number;
  transactionCount: number;
  miningInfo?: IMiningInfo;
}

export type { IBlock };
