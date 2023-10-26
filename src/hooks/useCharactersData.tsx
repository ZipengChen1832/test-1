
import { useEffect, useState } from "react";
import { filterCharactersData } from "@/utils";

export const useCharactersData = (selectedEpisode:string, episodeCharacters:Array<string>) => {
  const [data, setData] = useState<Array<any>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (selectedEpisode === "") {
      const fetchData = async () => {
        try {
          setLoading(true);
          fetch("https://rickandmortyapi.com/api/character?page=1")
              .then((response) => response.json())
              .then((data) => {
                  setData(data["results"]);
              });
        } catch (error:any) {
            setError(error);
        } finally {
          setLoading(false);
        }
      };
      
      fetchData();
    } else {
      const fetchData = async (url:string) => {
        try {
          setData([]);
          setLoading(true);
          fetch(url)
              .then((response) => response.json())
              .then((data) => {
                  setData(prev => [...prev, data]);
              });
        } catch (error:any) {
            setError(error);
        } finally {
          setLoading(false);
        }
      };
      episodeCharacters.forEach((url:any) => {
        fetchData(url);

      });
    }
  }, [selectedEpisode]);

  return { characters: filterCharactersData(data), loading, error };
};
