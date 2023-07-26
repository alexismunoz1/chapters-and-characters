import styled from "styled-components";
import Image from "next/image";
import { useSelectedCharacterStore } from "@/store/selectedCharacterStore";
import { LargeText, LargeBoldText } from "@/ui-kit/typography";

const HeaderCont = styled.header`
  background-color: var(--grey-04);
  display: flex;
  flex-direction: row;
  padding: 15px;
  position: fixed;
  width: 100%;
  z-index: 2;
`;

const CharactersNameCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--white);
`;

const CharactersNameContText = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Header = () => {
  const { characterName1, characterName2 } = useSelectedCharacterStore();
  return (
    <HeaderCont>
      <Image
        width={200}
        height={40}
        src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg'
        alt='Rick and Morty'
      />
      <CharactersNameCont>
        {!characterName1 && !characterName2 && (
          <LargeText>Select the characters</LargeText>
        )}
        {characterName1 && (
          <CharactersNameContText>
            <LargeText style={{ marginRight: "5px" }}>Character 1 Selected:</LargeText>
            <LargeBoldText>{characterName1}</LargeBoldText>
          </CharactersNameContText>
        )}

        {characterName2 && (
          <CharactersNameContText>
            <LargeText style={{ margin: "0 15px" }}> - </LargeText>
            <LargeText style={{ marginRight: "5px" }}>Character 2 Selected:</LargeText>
            <LargeBoldText>{characterName2}</LargeBoldText>
          </CharactersNameContText>
        )}
      </CharactersNameCont>
    </HeaderCont>
  );
};
