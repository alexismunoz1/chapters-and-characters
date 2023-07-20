import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import { rickAndMortyApi } from "@/api/rickAndMortyApi";

const fetchEpisodes = async (ctx: QueryFunctionContext) => {
  const [_, episodeNumbers] = ctx.queryKey;
  const { data } = await rickAndMortyApi.get(`/episode/${episodeNumbers}`);
  if (data.info) return null;
  return data;
};

export const useEpisodes = (episodeNumbers: number[]) => {
  const queryKey = ["episodes", episodeNumbers];
  return useQuery(queryKey, fetchEpisodes);
};
