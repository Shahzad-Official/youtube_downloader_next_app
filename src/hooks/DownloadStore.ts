import { create } from "zustand";

interface DownloadModel {
  progress: number;
  setProgress: (value: number) => void;
}

const DownloadStore = create<DownloadModel>((set) => ({
  progress: 0,
  setProgress(value) {
    set((state) => ({ progress: value }));
  },
}));
export default DownloadStore;
