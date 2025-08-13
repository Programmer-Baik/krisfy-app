import { type PhantomProvider, type WindowWithSolana } from '@/types/internal';
import { Connection, PublicKey, clusterApiUrl } from "@/types/libs";
import { useEffect, useState, type MouseEventHandler } from 'react';

export const usePhantomWallet = () => {
  const [phantomAvailable, setPhantomAvailable] = useState<boolean>(false);
  const [provider, setProvider] = useState<PhantomProvider | null>(null);
  const [phantomConnected, setPhantomConnected] = useState<boolean>(false);
  const [pubKey, setPubKey] = useState<PublicKey | null>(null);
  const [balance, setBalance] = useState<number>(0);

  useEffect(() => {
    if("solana" in window) {
      const solanaWindow = window as WindowWithSolana;
      if(solanaWindow?.solana?.isPhantom) {
        setProvider(solanaWindow.solana);
        if(phantomAvailable === true) {
          solanaWindow.solana.connect( { ONLY_IF_TRUSTED: true } );
        }
      }
    }
  }, [])

  useEffect(() => {
    provider?.on("connect", (publicKey: PublicKey) => {
      console.log(`Connect event: ${publicKey}`);
      setPhantomConnected(true);
      setPubKey(publicKey);
    })
    provider?.on("disconnect", () => {
      console.log(`Wallet disconnected`);
      setPhantomConnected(false);
      setPubKey(null);
    })
  }, [provider])

  const connectPhantom: MouseEventHandler = () => {
    if("solana" in window) {
      const solanaWindow = window as WindowWithSolana;
      if(solanaWindow?.solana?.isPhantom) {
        setProvider(solanaWindow.solana);
        setPhantomAvailable(true);
        solanaWindow.solana.connect( { ONLY_IF_TRUSTED: true } );
      }
    }
    console.log(`connect handler called`);
    provider?.connect().catch((err) => console.log(`Failed to Connect: ${err}`))
  }

  const disconnectPhantom: MouseEventHandler = () => {
    console.log(`disconnect handler called`);
    provider?.disconnect().catch((err) => console.log(`Failed to Disconnect: ${err}`))
  }

  const getPhantomWalletSolBalance = async () => {
    if (!pubKey) return;
    const connection = new Connection(clusterApiUrl("devnet"));
    const balance = await connection.getBalance(pubKey);
    const walletBalance = balance / 1_000_000_000;
    setBalance(walletBalance);
    console.log(`Balance: ${walletBalance}`);
  }

  useEffect(() => {
    getPhantomWalletSolBalance();
  }, [pubKey]);


  return {
    connectPhantom,
    disconnectPhantom,
    pubKey,
    phantomConnected,
    phantomAvailable,
    balance
  }

}
