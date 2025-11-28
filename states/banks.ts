import { create } from 'zustand';

type IBanks = {
    banks: string[];
    setBank: (item: string) => void;
}

export const useBankState = create<IBanks>((set) => ({
    banks: ['hello there'],
    setBank: (data: string) => set((state) => ({ ...state, banks: [...state.banks, data] })),
}))