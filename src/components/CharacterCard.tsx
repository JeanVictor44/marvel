import { Favorite, FavoriteBorder } from "@mui/icons-material"
import { Button, Card, CardActions, CardContent, CardMedia, Checkbox, Typography } from "@mui/material"

interface CharacterCardProps {
    name: string,
    img: string,
}

function CharacterCard({name, img}: CharacterCardProps){
    return (
        <Card sx={{ width: 200, height: 350}}>
        <CardMedia
          sx={{ height: 200}}
          image={img}
          title="green iguana"
        />
        <CardContent sx={{
          pb:"0"
        }}>
          <Typography gutterBottom variant="h5" component="div" color="#000">
            {name}
          </Typography>
        </CardContent>
        <CardActions sx={{
          pt:"0"
        }}>
          <Checkbox icon={<FavoriteBorder /> } checkedIcon={<Favorite />}/>
        </CardActions>
      </Card>
    )
}
export { CharacterCard }