import { IconButton, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { Container } from "@mui/material"
import { Button } from "@mui/material"
import Search from "@material-ui/icons/Search"
import {useState} from "react"
import {getAPIDataFromURL} from "../utlity/utils"
import SingleItemRenderer from "../Component/Content/SingleItemRenderer"
import MultiRssContentRenderer from "../Component/Content/MultiRssContentRenderer"
const Dynamic = () => {




    const [searchValue, setSearchValue] = useState("")
    const [content, setContent] = useState(null)

    const handleFetch = (e) => {
        if(searchValue != ""){ // handle non empty cases
            console.log(searchValue)
            const isValidURL = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/i.test(searchValue)
            if(isValidURL){
                console.log(searchValue)
                getAPIDataFromURL(searchValue)
                .then((result)=>{
                    setContent(result.data)
                })
                .catch((e)=>{
                    console.log("There was an error occured " + e)
                })
            }
        }
    }


    const handleReset = () => {
        setContent("")
        setSearchValue("")
    }

    return (
        <Container>
            <Box textAlign="center">
                <Typography variant="h6" sx={{mt:2}} >Enter the URL of a valid RSS Feed</Typography>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <TextField sx={{width:"75%", mt:2}} id="outlined-basic"  type="url" label="Enter URL" variant="outlined" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}
                    // InputProps={
                        // {endAdornment:(
                        //     <IconButton>
                        //         <Search />
                        //     </IconButton>
                        // )}
                    // } 
                    />
                    <Box display="flex" sx={{mb:2, mt:2}}>
                    <Button variant="contained" sx={{width:"fit-content", p:1, mt:1, px:2, mr:2}} onClick={handleFetch}>Fetch</Button>
                    <Button variant="contained" color="secondary"s sx={{width:"fit-content", p:1, mt:1, px:2, ml:2}} onClick={handleReset}>Reset</Button>
                    </Box>
                </Box>
            </Box>
            <Box>
                {!content?<div>Enter a valid url and fetch the rss data</div>:<div><MultiRssContentRenderer content={content} /></div>}
            </Box>
        </Container>
    )
}
export default Dynamic 
