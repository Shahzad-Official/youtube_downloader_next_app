import { create } from "zustand";

interface Interface {
  currentIndex: number;
  changeIndex: (index: number) => void;
}

const useHeader = create<Interface>((set) => ({
  currentIndex: -1,
  changeIndex(index) {
    set((state) => {
      localStorage.setItem("currentIndex", index.toString());

      return {
        currentIndex: index,
      };
    });
  },
}));
export default useHeader;
