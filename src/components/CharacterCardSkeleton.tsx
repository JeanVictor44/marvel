import { FavoriteBorder } from "@mui/icons-material"
import { Button, Card, CardActions, CardContent, CardMedia, Skeleton, Typography } from "@mui/material"

function CharacterCardSkeleton(){
    return (
      <Card sx={{ width: 200, height: 350, position:"relative"}}>
        <Skeleton 
        
          sx={{
            bgcolor:'#dedede'
          }}
          height={200}
          width={200}
          animation="wave"
          variant="rectangular"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <Skeleton animation='wave'  sx={{
            bgcolor:'#dedede'
          }}/>
          </Typography>
        </CardContent>

        <CardActions>
          <FavoriteBorder />
    
        
        </CardActions>
      </Card>
    )
}

export { CharacterCardSkeleton}