import { Episode } from "../types";

export const filterEpisodesData = (episodes:any) => {
    
    const filteredData: Episode[] = [];
  
    episodes.forEach((episode:any) => {
      filteredData.push({id: episode.id, name: episode.name, selected: false, characters: episode.characters})
    });
  
    return filteredData;
};