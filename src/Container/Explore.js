import { Autocomplete, Container, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import { TOPIC_NAME } from "../utlity/Constants"
import { TextField } from "@mui/material"
import { FormControl } from "@mui/material"
import { InputLabel } from "@mui/material"
import { Select } from "@mui/material"
import { MenuItem } from "@mui/material"
import { Button } from "@mui/material"
import MultiRssContentRenderer from "../Component/Content/MultiRssContentRenderer"
import { getAPIData } from "../utlity/utils"



const Explore = () => {


    const [topic, setTopic] = useState("")


    // useEffect(() => {
    //     console.log(topic + " changed")
    // }, [topic])


    const handleChange = ((e)=>{
        setTopic(e.target.value)
    })


    // useEffect(()=>{

    //     // const channels = getTopicsMappedChannel(topic)

    //     getAPIData(channels)
    //     .then((result)=>{
    //         console.log(result)
    //     })
    //     .catch((e)=>{
    //         console.log(e)
    //     })

    // }, [topic])



    return (
        <Container>
            <Box textAlign={"center"}>
                <Typography variant="h5" textAlign="center" sx={{m:2}}>Choose among the topics list for custom generated rss</Typography>
                <Box display="flex" flexDirection={"column"} alignItems="center">
                    <FormControl sx={{width:"50%"}}>
                        <InputLabel id="demo-simple-select-label">Topic Name</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={topic}
                            label="Topic Name"
                            onChange={handleChange}>
                            {TOPIC_NAME.map((channel)=>{
                                return (
                                <MenuItem value={channel}>{channel}</MenuItem>)
                            })}
                        </Select>
                    </FormControl>
                    <Button variant="contained" sx={{width:"fit-content", mt:2}} >Fetch</Button>
                </Box>
                {/* <MultiRssContentRenderer content={content}/> */}
            </Box>
        </Container>
    )
}

export default Explore