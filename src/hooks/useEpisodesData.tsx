
import { SetStateAction, useEffect, useState } from "react";
import { filterEpisodesData } from "@/utils";


export const useEpisodesData = () => {
  const [data, setData] = useState<Array<any>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const range:Array<number> = [];
    let i = 1;
    for (let i = 1; i <= 51; i++) {
      range.push(i);
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        fetch("https://rickandmortyapi.com/api/episode/"+range.toString())
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            });
      } catch (error:any) {
          setError(error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  return { episodes: filterEpisodesData(data), loading, error };
};
