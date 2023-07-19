import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import { rickAndMortyApi } from "../api/rickAndMortyApi";

const fetchCharacters = async (ctx: QueryFunctionContext) => {
  const [page] = ctx.queryKey;
  const { data } = await rickAndMortyApi.get(`/character?page=${page}`);
  return data;
};

export const useCharacters = (page: number) => {
  const queryKey = ["characters", page];
  const fetcher = fetchCharacters;

  return useQuery(queryKey, fetcher);
};
