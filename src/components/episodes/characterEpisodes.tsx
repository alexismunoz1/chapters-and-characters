import { useEpisodes } from "@/hooks/getEpisodes";

interface Props {
  episodesNum: number[];
  title: string;
}

export const CharacterEpisodes = ({ episodesNum, title }: Props) => {
  const episodes = useEpisodes(episodesNum);

  return (
    <>
      <h1>{title}</h1>
      <div style={{ padding: "10px" }}>
        {episodes.data?.name && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid black",
              margin: "10px",
            }}>
            <h5>{episodes.data.name}</h5>
            <p>{episodes.data.air_date}</p>
          </div>
        )}

        {!episodes.data?.name &&
          episodes.data?.map((episodes: any) => (
            <div
              key={episodes.id}
              style={{
                display: "flex",
                flexDirection: "column",
                border: "1px solid black",
                margin: "10px",
              }}>
              <h5>{episodes.name}</h5>
              <p>{episodes.air_date}</p>
            </div>
          ))}
      </div>
    </>
  );
};
