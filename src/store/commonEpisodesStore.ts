import { create } from "zustand";

interface EpisodesOfBothCharactersStore {
  episodesOfBothCharacters: number[];
  setEpisodesOfBothCharacters: (
    character1Episodes: number[],
    character2Episodes: number[]
  ) => void;
}

export const useEpisodesOfBothCharacters = create<EpisodesOfBothCharactersStore>(
  (set) => ({
    episodesOfBothCharacters: [],
    setEpisodesOfBothCharacters: (
      character1Episodes: number[],
      character2Episodes: number[]
    ) => {
      const commonEpisodes = getCommonEpisodes(character1Episodes, character2Episodes);
      set({
        episodesOfBothCharacters: commonEpisodes,
      });
    },
  })
);

function getCommonEpisodes(episodes1: number[], episodes2: number[]): number[] {
  const commonEpisodes: number[] = [];

  const episodesSet = new Set(episodes1);
  episodes2.forEach((episode) => {
    if (episodesSet.has(episode)) commonEpisodes.push(episode);
  });

  return commonEpisodes;
}
