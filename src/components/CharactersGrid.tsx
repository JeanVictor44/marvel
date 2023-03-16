import { Box, Grid, Pagination } from "@mui/material";
import { useState } from "react";
import useSWR from "swr";
import { fetcher } from "../api/Marvel";
import { CharacterCard } from "./CharacterCard";
import { GridCardsSkeleton } from "./GridCardsSkeleton";

interface CharactersGridProps {
    cardsAmount: number
}
function CharactersGrid({cardsAmount}: CharactersGridProps){
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState('')
    const offset = (page-1) * cardsAmount

    const {data, isLoading} = useSWR({url:'/characters',offset, limit:cardsAmount}, ({url, offset, limit}) => fetcher({url,offset,limit}))
    const paginationCount = data ? Math.round(data.total / cardsAmount) : 0 ; 


    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    if(isLoading){
        return (
            <GridCardsSkeleton cardsAmount={cardsAmount}/>
        )
    }
    
    return (
        <Box>
            <Grid container >
                
                <Grid container item spacing={2} sx={{display:"flex"}}>
                    {
                        data?.results?.map((character,id) => (
                            <Grid item key={id}>
                                <CharacterCard name={character.name} img={`${character.thumbnail.path}.${character.thumbnail.extension}`} />
                            </Grid>
                        ))
                    }
                </Grid>

            </Grid>
            <Pagination count={paginationCount} page={page} onChange={handleChangePage} shape="rounded" color="primary" sx={{ display:"flex", justifyContent:"center",marginTop:"20px"}}/>
        </Box>
    )
}
export { CharactersGrid }