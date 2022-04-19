import { Container } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios"
import { useEffect, useState } from "react"
import { getAPIData } from "../../utlity/utils"
import MultiRssContentRenderer from "../Content/MultiRssContentRenderer"
import MultipleSelect from "./MultiSelect"

const MultiRss = () => {

    const [content, setContent] = useState(null)


    const [selectedChannels, setSelectedChannels] = useState([])



    useEffect( ()=>{
        console.log("Calling api for the following channels "+ selectedChannels)
        if(selectedChannels.length != 0){ // do not call api when the selected channels are empty
            getAPIData(selectedChannels)
                .then((result)=>{
                    setContent(result.data)
                })
                .catch((e)=>{
                    console.log(e)
                })
        }
    }, [selectedChannels])


    return (
        <Container>
            <MultipleSelect setSelectedChannels={setSelectedChannels} />
            {<MultiRssContentRenderer content={content}/>}
        </Container>
    )
}

export default MultiRss