import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import { rickAndMortyApi } from "@/lib/api";
import { CharactersInfo } from "@/lib/types";

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
  return useQuery({
    queryKey: ["characters", page, characterName],
    queryFn: fetchCharacters,
    initialData,
  });
};
