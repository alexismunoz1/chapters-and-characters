import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import { rickAndMortyApi } from "@/api/rickAndMortyApi";
import { CharactersInfo } from "./types";

const fetchCharacters = async (ctx: QueryFunctionContext): Promise<CharactersInfo> => {
  const [_, page, characterName] = ctx.queryKey;
  const { data } = await rickAndMortyApi.get(
    `/character?page=${page}&name=${characterName}`
  );
  return data;
};

export const useCharacters = (
  page?: number,
  characterName?: string,
  initialData?: CharactersInfo
) => {
  const { data } = useQuery({
    queryKey: ["characters", page, characterName],
    queryFn: fetchCharacters,
    initialData,
  });
  return data;
};
