'use client';
import React from "react";
import { useCharactersData } from "@/hooks";
import Card from "./Card"
import { Character, CharactersProps } from "../types";
import styles from "../styles/Characters.module.css";

const Characters = ({selectedEpisode, episodeCharacters}: CharactersProps) => {
    const { characters, loading, error } = useCharactersData(selectedEpisode, episodeCharacters); 
    console.log(characters);

    return (
        <div className={styles.container}>
            {(selectedEpisode !== "") && 
                <h1 className={styles.title}>{episodeCharacters.length} Characters in episode "{selectedEpisode}"</h1>
            }

            <div className={styles.charactersContainer}>
                {characters.map((character:Character, index:number) => (
                    <Card
                        key={index}
                        character={character}>
                    </Card>
                ))}
            </div>
        </div>
    );
};
export default Characters