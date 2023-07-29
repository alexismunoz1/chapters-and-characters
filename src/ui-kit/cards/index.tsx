import Image from "next/image";
import styled from "styled-components";
import { LargeBoldText, BodyText, TinyText } from "@/ui-kit/typography";

interface Props {
  image: string;
  name: string;
  status: string;
  species: string;
  active?: boolean;
  onClick: () => void;
}

const CardContent = styled.div<{ $active?: boolean }>`
  display: flex;
  flex-direction: row;
  background-color: ${({ $active }) => ($active ? "var(--grey-04)" : "var(--grey-03)")};
  border-radius: 5px;
  cursor: pointer;
  box-shadow: ${({ $active }) => $active && "0px 0px 9px 6px rgba(84,204,68,0.69)"};
  color: var(--white);
  &:hover {
    transition: all 0.3s ease-in-out;
    transform: scale(1.05);
    box-shadow: 0px 0px 9px 6px rgba(84, 204, 68, 0.69);
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
`;

export const CharacterCard = ({
  image,
  name,
  status,
  species,
  active,
  onClick,
}: Props) => {
  return (
    <CardContent onClick={onClick} $active={active}>
      <Image
        style={{ borderRadius: "5px 0 0 5px", objectFit: "contain", border: "2px solid" }}
        width={100}
        height={100}
        src={image}
        alt={name}
        priority={true}
      />
      <ContentInfo>
        <LargeBoldText style={{ marginBottom: "5px" }}>{name}</LargeBoldText>
        <BodyText>Status: {status}</BodyText>
        <BodyText>Specie: {species}</BodyText>
      </ContentInfo>
    </CardContent>
  );
};
