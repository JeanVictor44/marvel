import { Grid } from "@mui/material";
import { CharacterCardSkeleton } from "./CharacterCardSkeleton";

interface GridCardsLoadingProps {
    cardsAmount: number
}
function GridCardsSkeleton({cardsAmount}: GridCardsLoadingProps){
    return (
        <Grid container>    
                <Grid container item spacing={2} >
                    {
                        Array(cardsAmount).fill(null).map((_,id) => (
                            <Grid item key={id}>
                                <CharacterCardSkeleton />
                            </Grid>
                        ))
                    }
                </Grid>
            </Grid>
    )
}
export { GridCardsSkeleton }