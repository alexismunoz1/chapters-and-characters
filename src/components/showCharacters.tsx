import { useCharacters } from "../hooks/getCharacters";

export const ShowCharacters = () => {
  const characters = useCharacters(0);
  console.log({ characters });
  return (
    <>
      <h1>Characters</h1>
    </>
  );
};
