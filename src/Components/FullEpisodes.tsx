'use client';
import React, { useEffect, useState } from "react";
import { useEpisodesData } from "@/hooks";
import Characters from "./Characters";
import { Episode, EpisodesProps } from "../types";
import styles from "../styles/Episodes.module.css";

const FullEpisodes = () => {
    const { episodes, loading, error } = useEpisodesData();
    const [selectedEpisode, setSelectedEpisode] = useState("");
    // const [episodeName, setEpisodeName] = useState("");
    const [episodeCharacters, setEpisodeCharacters] = useState<Array<string>>([]);

    const onClicked = (name:string, characters:Array<string>) => {
        if (name === selectedEpisode) {
            setSelectedEpisode("");
            // setEpisodeName("");
            setEpisodeCharacters([]);
        } else {
            setSelectedEpisode(name);
            // setEpisodeName(name);
            setEpisodeCharacters(characters);
        }
    };


    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Rick and Morty Characters</h1>
            <div className={styles.row}>
                <div className={styles.episodesBar}>
                    <h1 className={styles.episodeTitle}>Episodes</h1>
                    <div className={styles.episodesList}>
                        {episodes.map((episode:Episode) => (
                            <div className={`${styles.episode} ${
                                episode.name === selectedEpisode ? styles.selectedEpisode : styles.unselectedEpisode
                            }`} key={episode.id} onClick={() => onClicked(episode.name, episode.characters)}>{episode.name}</div>
                            ))
                        }
                    </div>
                </div>
                
                <Characters selectedEpisode={selectedEpisode} episodeCharacters={episodeCharacters}  />
            </div>
        </div>
    );
};
export default FullEpisodes