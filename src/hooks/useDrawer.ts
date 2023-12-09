import { create } from "zustand";
interface DrawerStates {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle:(value:boolean)=>void;
}

const useDrawerState = create<DrawerStates>((set) => ({
  isOpen: false,
  open() {
    set(() => ({ isOpen: true }));
  },
  close() {
    set(() => ({ isOpen: false }));
  },
  toggle(value) {
    set(()=>({isOpen:value}));
  },
}));

export default useDrawerState;
