import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import Link from '@mui/material/Link';


const SingleItemRenderer = ({item}) => {

    console.log(item)
    return (
        <Card sx={{ minWidth: "50", my:2,":hover": {boxShadow: 20, cursor:"pointer"} }} >
            {item["image"] == null||item["image"].trim() == ""?<div></div>:<CardMedia component="img" height="194" image="/static/images/cards/paella.jpg" alt="Paella dish" />}
            <CardContent > 
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="p">{item.description}</Typography>
            </CardContent>
            <CardActions>
                <Typography variant="span" sx={{fontSize:"10px"}}>{item.pubDate}</Typography>
                <Link href={item.comments} sx={{mx:2, textDecoration:"none", fontSize:"14px"}}>comments</Link>
            </CardActions>
        </Card>
    )

}

export default SingleItemRenderer