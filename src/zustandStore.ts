import create from 'zustand';

interface ZustandStore {
  lengthOfTime: number;
  noOfVideos: number;
  searchTerm: string;
  setLengthOfTime: (lengthOfTime: number | string) => void;
  setNoOfVideos: (noOfVideos: number | string) => void;
  setSearchTerm: (searchTerm: string) => void;
}

export const useStore = create<ZustandStore>((set) => ({
  // initial state
  lengthOfTime: 0,
  noOfVideos: 0,
  searchTerm: '',
  // methods for manipulating state
  setLengthOfTime: (lengthOfTime: number | string) => {
    set(() => ({
      lengthOfTime: Number(lengthOfTime),
    }));
  },
  setNoOfVideos: (noOfVideos: number | string) => {
    set(() => ({
      noOfVideos: Number(noOfVideos),
    }));
  },
  setSearchTerm: (searchTerm: string) => {
    set(() => ({
      searchTerm,
    }));
  },
}));
