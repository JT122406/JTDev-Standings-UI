import  {type AxiosResponse} from "axios";
import axios from "axios";

const BASE_URL: string = import.meta.env.VITE_BASE_URL;

export const getGames:() => Promise<{ id: number, title: string}[]> = async (): Promise<{ id: number, title: string}[]> => {
    const response: AxiosResponse = await axios.get(`${BASE_URL}/getGames`)
    return response.data;
}