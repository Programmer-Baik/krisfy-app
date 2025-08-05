/*
  ---------------------------------
  Comment Template
  ---------------------------------
*/


/*
  ---------------------------------
  Phantom Wallet Types
  ---------------------------------
*/

import { PublicKey } from './libs';

export type PhantomEvent = "disconnect" | "connect" | "accountChanged";

export interface ConnectOpts {
  ONLY_IF_TRUSTED: boolean;
}

export interface PhantomProvider {
  connect: (opts?: Partial<ConnectOpts>) => Promise<{ publicKey: PublicKey }>;
  disconnect: () => Promise<void>;
  on: (event: PhantomEvent, callback: (args: any) => void) => void;
  isPhantom: boolean;
}

export type WindowWithSolana = Window & {
  solana?: PhantomProvider;
}

/*
  ---------------------------------
  End Phantom Wallet Types
  ---------------------------------
*/
