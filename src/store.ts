import { create } from "zustand";

type CounterStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
  incrementAsync: () => Promise<void>;
};

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  //async update
  incrementAsync: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1));
    set((state) => ({ count: state.count + 1 }));
  },
}));
