import { BodyBoldText, TinyText } from "../typography";
import styled from "styled-components";

interface Props {
  name: string;
  air_date: string;
}

const EpisodesCont = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--grey-03);
  width: 100%;
  padding: 5px;
`;

export const EpisodeList = ({ name, air_date }: Props) => {
  return (
    <EpisodesCont>
      <BodyBoldText>{name}</BodyBoldText>
      <TinyText>{air_date}</TinyText>
    </EpisodesCont>
  );
};
