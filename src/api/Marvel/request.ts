import Axios from 'axios'

export const marvelAxios = Axios.create({
    baseURL: "http://gateway.marvel.com/v1/public/"
})

export async function marvelFetch(url: string){
    const data = await(await (marvelAxios.get(url))).data
    return data
}

