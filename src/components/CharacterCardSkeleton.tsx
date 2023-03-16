import { Button, Card, CardActions, CardContent, CardMedia, Skeleton, Typography } from "@mui/material"

function CharacterCardSkeleton(){
    return (
        <Card sx={{ width: 200, height: 350}}>
        <Skeleton sx={{ height: 200}}animation="wave" variant="rectangular" color="blue" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <Skeleton />
          </Typography>
        </CardContent>

        <CardActions>
          
            <Skeleton variant="rectangular" width={50} height={20}/>
            <Skeleton variant="rectangular" width={50} height={20}/>
        
        </CardActions>
      </Card>
    )
}

export { CharacterCardSkeleton}