// store/useWalletStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { type WalletState } from '@/types/internal';

export const useWalletStore = create<WalletState>()(
  persist(
    (set) => ({
      address: null,
      balance: null,
      client: null,
      connecting: false,
      connected: false,
      setAddress: (address) => {
        set({ address });
        console.log('WalletStore initialized', address);
      },
      setBalance: (balance) => set({ balance }),
      setClient: (client) => set({ client }),
      setConnecting: (connecting) => set({ connecting }),
      setConnected: (connected) => set({ connected }),
    }),
    {
      name: 'WALLET_STORE',
      partialize: (state) => ({ address: state.address, connected: state.connected }),
    }
  )
);
