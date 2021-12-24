import create from "zustand";

interface ZustandStore {
  lengthOfTime: number;
  noOfVidoes: number;
  setLengthOfTime: (lengthOfTime: number) => void;
}

export const useStore = create<ZustandStore>((set) => ({
  // initial state
  lengthOfTime: 0,
  noOfVidoes: 0,
  // methods for manipulating state
  setLengthOfTime: (lengthOfTime: number) => {
    set(() => ({
      lengthOfTime,
    }));
  },
  setNoOfVidoes: (noOfVidoes: number) => {
    set(() => ({
      noOfVidoes,
    }));
  },
}));
