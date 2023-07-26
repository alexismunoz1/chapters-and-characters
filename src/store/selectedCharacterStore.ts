import { create } from "zustand";

interface SelectedCharacter {
  characterName1: string;
  characterName2: string;
  setCharacterName1: (character1: string) => void;
  setCharacterName2: (character2: string) => void;
}

export const useSelectedCharacterStore = create<SelectedCharacter>((set) => ({
  characterName1: "",
  characterName2: "",
  setCharacterName1: (characterName1) => set({ characterName1 }),
  setCharacterName2: (characterName2) => set({ characterName2 }),
}));
