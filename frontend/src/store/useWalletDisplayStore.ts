import { create } from 'zustand';
import { type WalletDisplayState } from '@/types/internal';

export const useWalletDisplayStore = create<WalletDisplayState>((set) => ({
  isWallet: false,
  toggleWallet: () => set((state) => ({ isWallet: !state.isWallet })),
}));
