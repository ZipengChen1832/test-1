'use client';
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { useEpisodesData } from "@/hooks";
import Characters from "./Characters";
import { Episode, EpisodesProps } from "../types";
import styles from "../styles/Episodes.module.css";

const Episodes = () => {
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
                <div className={styles.episodesBar}>
                    <h1 className={styles.episodeTitle}>Episodes</h1>
                    <div className={styles.episodesList}>
                        {/* <ul> */}
                        {episodes.map((episode:Episode) => (
                            // <li key={episode.id}>
                            <Link className={`${styles.episode} ${
                                episode.name === selectedEpisode ? styles.selectedEpisode : styles.unselectedEpisode
                            }`} 
                                href={`/episode/${episode.id}`}
                                key={episode.id} onClick={() => onClicked(episode.name, episode.characters)}>{episode.name}</Link>
                            // </li>
                            )) 
                        }
                        {/* </ul> */}
                    </div>
                </div>
    );
};
export default Episodes