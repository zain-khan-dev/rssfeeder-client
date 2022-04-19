import { Box, Typography } from "@mui/material"
import { Link } from "react-router-dom"
const SingleHeaderRenderer = ({header}) => {

    console.log(header)

    return(
        <Box textAlign="center" sx={{m:4}}>
            <Typography variant="h4"><Link to={header["link"]} style={{textDecoration:"none", color:"black"}}> {header["title"]}</Link></Typography>
            <Typography variant="p">{header["description"]}</Typography>
            <Box>
                {header["category"] != null?<div><div>Categories</div>{header["category"]}</div>:<></>}
                {header["image"] != null?<img src={header["image"]} />:<></>}
            </Box>

            {/* <div>{header[""]}</div>
            <div>{header[""]}</div> */}
        </Box>
    )
}

export default SingleHeaderRenderer