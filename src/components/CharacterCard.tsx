import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

interface CharacterCardProps {
    name: string,
    img: string,
}

function CharacterCard({name, img}: CharacterCardProps){
    return (
        <Card sx={{ width: 400}}>
        <CardMedia
          sx={{ height: 400}}
          image={img}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    )
}
export { CharacterCard }