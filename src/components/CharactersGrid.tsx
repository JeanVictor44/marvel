import { Grid, Pagination } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../api/Marvel";
import { marvelAxios, marvelFetch } from "../api/Marvel/request";
import { Character } from "../types/Character";
import { RequestMarvelAPI } from "../types/RequestMarvelAPI";
import { CharacterCard } from "./CharacterCard";
import { CharacterCardSkeleton } from "./CharacterCardSkeleton";

// Melhorar o layout
// Adicionar swr
// Adicionar redux toolkit

function CharactersGrid(){
    const [page, setPage] = useState(1)
    const offset = (page-1) * 8  

    const {data, isLoading} = useSWR<RequestMarvelAPI<Character>>({url:'/characters',offset, limit:8}, ({url, offset, limit}) => fetcher({url,offset,limit}))
    const paginationCount = data ? Math.round(data.total / 8) : 0 ; 


    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    if(isLoading){
        return (
            <Grid container spacing={2}>    
                <Grid container item spacing={2} sx={{display:"flex", justifyContent:"center"}}>
                    {
                        Array(8).fill(null).map((_,id) => (
                            <Grid item key={id}>
                                <CharacterCardSkeleton />
                            </Grid>
                        ))
                    }
                </Grid>
            </Grid>
        )
    }
    
    return (
        <>
            <Grid container spacing={2}>
                
                <Grid container item spacing={2} sx={{display:"flex", justifyContent:"center"}}>
                    {
                        data?.results?.map((character,id) => (
                            <Grid item key={id}>
                                <CharacterCard name={character.name} img={`${character.thumbnail.path}.${character.thumbnail.extension}`} />
                            </Grid>
                        ))
                    }
                </Grid>

            </Grid>
            <Pagination count={paginationCount} page={page} onChange={handleChangePage} shape="rounded" color="primary" sx={{ display:"flex", justifyContent:"center",marginTop:"20px", background:"#fff"}}/>
        </>
    )
}
export { CharactersGrid }