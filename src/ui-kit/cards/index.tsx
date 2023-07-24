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

const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #333333;
  margin: 10px;
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
        <Image width={100} height={100} src={image} alt={name} priority={true} />
      </div>
      <ContentInfo>
        <LargeBoldText>{name}</LargeBoldText>
        <BodyText>Status: {status}</BodyText>
        <BodyText>Specie: {species}</BodyText>
      </ContentInfo>
    </CardContent>
  );
};
