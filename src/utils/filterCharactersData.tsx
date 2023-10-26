import { Character } from "../types";

export const filterCharactersData = (characters:any) => {
    
    const filteredData: Character[] = []
    characters.forEach((character:any) => {
      filteredData.push({id: character.id, name: character.name, image: character.image})
    });
  
    return filteredData;
};