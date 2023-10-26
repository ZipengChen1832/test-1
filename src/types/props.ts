import { Dispatch, SetStateAction } from "react";

export interface CharacterDataProps {
    selectedEpisode: number;
    episodeCharacters: Array<string>;
}
export interface CharactersProps {
    selectedEpisode: string;
    // episodeName: string;
    episodeCharacters: Array<string>;
}

export interface EpisodesProps {
    selectedEpisode: number;
    page: number;
    // episodeCharacters: Array<string>;
}

export interface PaginationProps {
    page: number;
    pages: number;
    setPage: Dispatch<SetStateAction<number>>;
    // episodeCharacters: Array<string>;
}