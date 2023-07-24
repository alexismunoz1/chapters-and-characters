import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import { rickAndMortyApi } from "@/lib/api";
import { EpisodeInfo } from "@/lib/types";

const fetchEpisodes = async (ctx: QueryFunctionContext): Promise<EpisodeInfo[]> => {
  const [_, episodeNumbers] = ctx.queryKey;
  const { data } = await rickAndMortyApi.get(`/episode/${episodeNumbers}`);
  if (data.info) return data.results;
  if (data.id) return [data];
  return data;
};

export const useEpisodes = (episodeNumbers: number[]) => {
  const queryKey = ["episodes", episodeNumbers];
  return useQuery(queryKey, fetchEpisodes);
};
