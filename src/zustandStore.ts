import create from "zustand";

interface ZustandStore {
  lengthOfTime: number;
  noOfVideos: number;
  setLengthOfTime: (lengthOfTime: number) => void;
  setNoOfVideos: (noOfVideos: number) => void;
}

export const useStore = create<ZustandStore>((set) => ({
  // initial state
  lengthOfTime: 0,
  noOfVideos: 0,
  // methods for manipulating state
  setLengthOfTime: (lengthOfTime: number) => {
    set(() => ({
      lengthOfTime,
    }));
  },
  setNoOfVideos: (noOfVideos: number) => {
    set(() => ({
      noOfVideos,
    }));
  },
}));
