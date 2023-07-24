import { useEpisodes } from "@/hooks/getEpisodes";

interface Props {
  title: string;
  episodesNum: number[];
}

export const ShowEpisodes = ({ title, episodesNum }: Props) => {
  const episodes = useEpisodes(episodesNum);

  return (
    <>
      <h1>{title}</h1>
      <div>
        {episodes.data?.name ? (
          <div>
            <h5>{episodes.data.name}</h5>
            <p>{episodes.data.air_date}</p>
          </div>
        ) : (
          episodes.data?.map((episodes: any) => (
            <div key={episodes.id}>
              <h5>{episodes.name}</h5>
              <p>{episodes.air_date}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
};
