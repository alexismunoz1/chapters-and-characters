import { create } from "zustand";

interface EpisodesStore {
  episodesCharacter1: number[];
  episodesCharacter2: number[];
  setEpisodesCharacter1: (episodesCharacter1: number[]) => void;
  setEpisodesCharacter2: (episodesCharacter2: number[]) => void;
}

export const useEpisodesStore = create<EpisodesStore>((set) => ({
  episodesCharacter1: [],
  episodesCharacter2: [],
  setEpisodesCharacter1: (episodesCharacter1: number[]) => set({ episodesCharacter1 }),
  setEpisodesCharacter2: (episodesCharacter2: number[]) => set({ episodesCharacter2 }),
}));
