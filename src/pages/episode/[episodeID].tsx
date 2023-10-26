
import { useRouter } from 'next/router';
import React, { useEffect, useState } from "react";
import { Characters } from "@/Components";
import { useSingleEpisodeData } from '@/hooks';
import { Episode } from '@/types';

export default function CharacterPerEpisode() {
  const { query } = useRouter();
//   const { episode, loading, error } = useSingleEpisodeData(query.episodeID); 
  const [episode, setEpisode] = useState<Episode>({id: -1, name: "", characters: []});
//   const [selectedEpisode, setSelectedEpisode] = useState("");
  useEffect(() => {
    if (query?.episodeID) {
        const fetchData = async () => {
            try {
              fetch("https://rickandmortyapi.com/api/episode/"+query.episodeID)
                  .then((response) => response.json())
                  .then((data) => {
                      setEpisode({id: data.id, name: data.name, characters: data.characters});
                  });
            } catch (error:any) {
                console.log(error);
            }
          };
          
          fetchData();
    }
  }, [query?.episodeID]);
  return (
    <Characters selectedEpisode={episode.name} episodeCharacters={episode.characters}/>
  );
}