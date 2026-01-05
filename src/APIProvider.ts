import axios from "axios";

const BASE_URL: string = import.meta.env.VITE_BASE_URL;

export const getGames:() => Promise<{ id: number, title: string}[]> = async (): Promise<{ id: number, title: string}[]> => {
    return (await axios.get(`${BASE_URL}/games/getGames`)).data;
};

export const getGameById:(id: number) => Promise<{ id: number, title: string}[]> = async (id: number): Promise<{ id: number, title: string}[]> => {
    return (await axios.get(`${BASE_URL}/games/${id}`)).data;
};

export const getPlayers:() => Promise<{ id: number, display_name: string}[]> = async (): Promise<{ id: number, display_name: string}[]> => {
    return (await axios.get(`${BASE_URL}/getPlayers`)).data;
};

export const getPlayerById: (id: number) => Promise<{ id: number, display_name: string}> = async (id: number): Promise<{ id: number, display_name: string}> => {
    return (await axios.get(`${BASE_URL}/getPlayerById?id=${id}`)).data;
};

export const getPlayerByDisplayName: (display_name: string) => Promise<{ id: number, display_name: string}> = async (display_name: string): Promise<{ id: number, display_name: string}> => {
    return (await axios.get(`${BASE_URL}/getPlayerById?display_name=${display_name}`)).data;
};

export const addPlayer: (display_name: string) => Promise<{ id: number, display_name: string}> = async (display_name: string): Promise<{ id: number, display_name: string}> => {
    return (await axios.post(`${BASE_URL}/players/player`, { display_name })).data;
};