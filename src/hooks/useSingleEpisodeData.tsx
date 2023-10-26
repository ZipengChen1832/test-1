
import { SetStateAction, useEffect, useState } from "react";
import { filterEpisodesData } from "@/utils";
import { Episode, EpisodesProps } from "../types";


export const useSingleEpisodeData = (episodeID:number) => {
  const [data, setData] = useState<Episode>({id: -1, name: "", characters: []});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        fetch("https://rickandmortyapi.com/api/episode/"+episodeID)
            .then((response) => response.json())
            .then((data) => {
                setData({id: data.id, name: data.name, characters: data.characters});
            });
      } catch (error:any) {
          setError(error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  return { episode:data, loading, error };
};
