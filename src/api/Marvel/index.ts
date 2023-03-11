import md5 from "md5"
import { Fetcher } from "swr"
import { Character } from "../../types/Character"
import { RequestMarvelAPI } from "../../types/RequestMarvelAPI"
import { marvelAxios } from "./request"

 
class MarvelAPI {
    private readonly PUBLIC_KEY = import.meta.env.VITE_MARVEL_API_PUBLIC_KEY
    private readonly PRIVATE_KEY = import.meta.env.VITE_MARVEL_API_PRIVATE_KEY

    async getCharacters(url:string, offset: number = 0, limit: number = 8): Promise<RequestMarvelAPI<Character>>{
        const timeStamp = Number(new Date())
        const hash = md5(timeStamp + this.PRIVATE_KEY + this.PUBLIC_KEY)

        const characters = (await marvelAxios.get(`${url}?offset=${offset}&limit=${limit}&ts=${timeStamp}&apikey=${this.PUBLIC_KEY}&hash=${hash}`)).data.data
        return characters as RequestMarvelAPI<Character>
    }
} 


const marvelInstance =  new MarvelAPI()
interface FetcherArguments {
    url:string, 
    offset: number,
    limit: number
}

export const fetcher: Fetcher<RequestMarvelAPI<Character>, FetcherArguments> = ({limit,offset,url}) => marvelInstance.getCharacters(url,offset,limit)