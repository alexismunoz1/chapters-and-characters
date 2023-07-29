import { useState } from "react";
import { useCharacters } from "@/hooks/getCharactersPerPage";
import { CharactersInfo } from "@/lib/types";
import { CharacterCard } from "@/ui-kit/cards";
import { SubTitle } from "@/ui-kit/typography";
import { TextField } from "@/ui-kit/textfields";
import { PaginateCharacters } from "@/ui-kit/paginate";

interface Props {
  title: string;
  initialCharacters: CharactersInfo;
  setEpisodesCharacter: (episodesCharacter: number[]) => void;
  setCharacter: (character: string) => void;
}

export const ShowCharacters = ({
  title,
  initialCharacters,
  setEpisodesCharacter,
  setCharacter,
}: Props) => {
  const [characterName, setCharacterName] = useState("");
  const [characterId, setCharacterId] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);
  const { data: characters } = useCharacters(
    pageNumber,
    characterName,
    initialCharacters
  );

  const handlePageChange = ({ selected }: { selected: number }) => {
    setPageNumber(selected + 1);
  };

  const handleChangeCharacterName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPageNumber(1);
    setCharacterName(e.target.value);
  };

  const handleSetEpisodes = (episodesUrls: string[]) => {
    const episodesNumbers = episodesUrls.map((url) => {
      const parts = url.split("/");
      const number = Number(parts[parts.length - 1]);
      return number;
    });
    setEpisodesCharacter(episodesNumbers);
  };

  return (
    <div className='showCharactersContainer'>
      <div className='showCharactersTitleAndInput'>
        <SubTitle style={{ marginBottom: "10px" }}>{title}</SubTitle>
        <TextField
          type='text'
          placeholder='Search character'
          onChange={handleChangeCharacterName}
        />
      </div>
      <div className='charactersList'>
        {characters &&
          characters.results.map((character) => (
            <CharacterCard
              key={character.id}
              image={character.image}
              name={character.name}
              status={character.status}
              species={character.species}
              active={character.id === characterId}
              onClick={() => {
                handleSetEpisodes(character.episode);
                setCharacter(character.name);
                setCharacterId(character.id);
              }}
            />
          ))}
      </div>
      <div>
        <PaginateCharacters
          pageCount={initialCharacters.info.pages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};
