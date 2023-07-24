import { CharactersInfo } from "@/lib/types";
import axios from "axios";

export const rickAndMortyApi = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

export const fetchCharactersGet = async (): Promise<CharactersInfo> => {
  const { data } = await rickAndMortyApi.get(`/character`);
  return data;
};
