import { BodyBoldText, TinyText } from "../typography";

interface Props {
  name: string;
  air_date: string;
}

export const EpisodeList = ({ name, air_date }: Props) => {
  return (
    <>
      <BodyBoldText>{name}</BodyBoldText>
      <TinyText>{air_date}</TinyText>
    </>
  );
};
