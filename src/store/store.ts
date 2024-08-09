import { create } from "zustand";

type BiddingState = {
  menuNumber: number;
  setMenuNumber: (isBidding: number) => void;
};

export const useMenuNumberStore = create<BiddingState>((set) => ({
  menuNumber: 12,
  setMenuNumber: (menuNumber: number) => set({ menuNumber }),
}));
