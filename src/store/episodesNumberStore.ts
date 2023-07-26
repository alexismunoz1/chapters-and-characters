import { create } from "zustand";

interface EpisodesStore {
  character1Episodes: number[];
  character2Episodes: number[];
  setCharacter1Episodes: (character1Episodes: number[]) => void;
  setCharacter2Episodes: (character2Episodes: number[]) => void;
}

export const useEpisodesStore = create<EpisodesStore>((set) => ({
  character1Episodes: [],
  character2Episodes: [],
  setCharacter1Episodes: (character1Episodes: number[]) => set({ character1Episodes }),
  setCharacter2Episodes: (character2Episodes: number[]) => set({ character2Episodes }),
}));
