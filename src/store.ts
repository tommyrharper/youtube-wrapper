import create from 'zustand';

interface TimeStore {
  lengthOfTime: number;
  setLengthOfTime: (lengthOfTime: number | string) => void;
}

export const useTimeStore = create<TimeStore>((set) => ({
  lengthOfTime: 0,
  setLengthOfTime: (lengthOfTime: number | string) => {
    set(() => ({
      lengthOfTime: Number(lengthOfTime),
    }));
  },
}));

interface NoOfVideosStore {
  noOfVideos: number;
  setNoOfVideos: (noOfVideos: number | string) => void;
}

export const useNoOfVideosStore = create<NoOfVideosStore>((set) => ({
  noOfVideos: 0,
  setNoOfVideos: (noOfVideos: number | string) => {
    set(() => ({
      noOfVideos: Number(noOfVideos),
    }));
  },
}));

interface SearchTermStore {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}

export const useSearchTermStore = create<SearchTermStore>((set) => ({
  searchTerm: '',
  setSearchTerm: (searchTerm: string) => {
    set(() => ({
      searchTerm,
    }));
  },
}));
