import { useEpisodes } from "@/hooks/getEpisodes";
import { EpisodeList } from "@/ui-kit/list";
import { SubTitle } from "@/ui-kit/typography";

interface Props {
  title: string;
  episodesNum: number[];
}

export const ShowEpisodes = ({ title, episodesNum }: Props) => {
  const { data: episodes } = useEpisodes(episodesNum);

  return (
    <div className='showEpisodesContainer'>
      <div className='episodesListTitle'>
        <SubTitle>{title}</SubTitle>
      </div>
      <div className='episodesList'>
        {episodes &&
          episodes.map((episodes) => (
            <EpisodeList
              key={episodes.id}
              name={episodes.name}
              air_date={episodes.air_date}
            />
          ))}
      </div>
    </div>
  );
};
