import Image from "next/image";
import styled from "styled-components";
import { LargeBoldText, BodyText } from "@/ui-kit/typography";

interface Props {
  image: string;
  name: string;
  status: string;
  species: string;
  onClick: () => void;
}

const CardContent = styled.div<{ active?: boolean }>`
  display: flex;
  flex-direction: row;
  background-color: #333333;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    transition: all 0.3s ease-in-out;
    transform: scale(1.05);
  }
  &:active {
    opacity: 0.6;
    transition: all 0.3s ease-in-out;
    transform: scale(1);
  }
`;

const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  color: white;
`;

export const CharacterCard = ({ image, name, status, species, onClick }: Props) => {
  return (
    <CardContent onClick={onClick}>
      <div>
        <Image
          style={{ borderRadius: "5px" }}
          width={100}
          height={100}
          src={image}
          alt={name}
          priority={true}
        />
      </div>
      <ContentInfo>
        <LargeBoldText>{name}</LargeBoldText>
        <BodyText>Status: {status}</BodyText>
        <BodyText>Specie: {species}</BodyText>
      </ContentInfo>
    </CardContent>
  );
};
