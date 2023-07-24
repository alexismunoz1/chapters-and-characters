import { useEpisodes } from "@/hooks/getEpisodes";

interface Props {
  title: string;
  episodesNum: number[];
}

export const ShowEpisodes = ({ title, episodesNum }: Props) => {
  const { data: episodes } = useEpisodes(episodesNum);
  console.log({ episodes });

  return (
    <>
      <h1>{title}</h1>
      <div>
        {episodes &&
          episodes.map((episodes) => (
            <div key={episodes.id}>
              <h5>{episodes.name}</h5>
              <p>{episodes.air_date}</p>
            </div>
          ))}
      </div>
    </>
  );
};
