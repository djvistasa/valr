interface IMiningInfo {
  name: string;
  link: string;
  address: string;
}

interface ILatestBlock {
  height: number;
  fill: number;
}

interface ISpender {
  txid: string;
  input: number;
}

interface IOutput {
  address: string;
  pkscript: string;
  value: number;
  spent: boolean;
  spender: ISpender | null;
}

interface ITransaction {
  txid: string;
  size: number;
  version: number;
  locktime: number;
  fee: number;
  inputs: [];
  outputs: IOutput[];
  block: {};
  deleted: boolean;
  time: number;
  rbf: boolean;
  weight: number;
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
  network?: string;
  latestBlock?: ILatestBlock[];
  latestBlockNumber?: number;
  transactions?: ITransaction[];
  totalTransactions?: number;
}

export type { IBlock };
