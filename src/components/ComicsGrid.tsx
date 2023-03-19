import { GridCardsSkeleton } from "./GridCardsSkeleton"
import useSWR from 'swr'
import { useState } from "react"
import { fetcherComics } from "../api/Marvel"
import { Grid, Pagination, Typography } from "@mui/material"
import { Box } from "@mui/system"

interface ComicsGridProps {
    comicsAmount: number
}

function ComicsGrid({comicsAmount}: ComicsGridProps){
    const [page, setPage] = useState(1)
    const offset = (page-1) * comicsAmount
    
    const {data, isLoading} = useSWR({url:'/comics',offset, limit:comicsAmount}, ({url, offset, limit}) => fetcherComics({url,offset,limit}))
    const paginationCount = data ? Math.round(data.total / comicsAmount) : 0 ; 

    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };
    if(isLoading){
        return (
            <GridCardsSkeleton cardsAmount={comicsAmount}/>
        )
    }
    return (
        <Grid container>
            <Grid container item spacing={2} sx={{display:"flex"}}>
                {
                    data?.results.map((comics) => (
                        <Grid item key={comics.id}>
                            <Box>
                                <img src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`} width={250} height={350}/>
                                <Typography width={200}>
                                    {comics.title}
                                </Typography>
                            </Box>
                        </Grid>
                        
                    ))
                }
            </Grid>
            <Pagination count={paginationCount} page={page} onChange={handleChangePage} shape="rounded" color="primary" sx={{ display:"flex", justifyContent:"center",marginTop:"20px"}}/>

        </Grid>
    )

    
}
export { ComicsGrid }