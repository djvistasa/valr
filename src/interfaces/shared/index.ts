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

interface IInput {
  coinbase: boolean;
  txid: string;
  output: number;
  sigscript: string;
  sequence: number;
  pkscript: string;
  value: number;
  address: string;
  witness: [];
}

interface ITransaction {
  txid: string;
  size: number;
  version: number;
  locktime: number;
  fee: number;
  inputs: IInput[];
  outputs: IOutput[];
  block: {};
  deleted: boolean;
  time: string;
  rbf: boolean;
  weight: number;
}

interface IBlock {
  hash: string;
  height: number;
  mainchain: boolean;
  previous: string;
  time: string;
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
  confirmations?: string;
  blockReward?: number;
  feeReward?: number;
  transactionVolume?: number;
  difficulty: number;
}

export type { IBlock, ITransaction, IInput, IOutput, ILatestBlock };
