import { Container } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios"
import { useEffect, useState } from "react"
import { getAPIData } from "../../utlity/utils"
import MultiRssContentRenderer from "../Content/MultiRssContentRenderer"

const MultiRss = () => {

    const [content, setContent] = useState(null)



    useEffect( ()=>{

        console.log("this will be called first")
        getAPIData()
        .then((result)=>{
            setContent(result.data)
        })
        .catch((e)=>{
            console.log(e)
        })
    }, [])


    return (
        <Container>
            {<MultiRssContentRenderer content={content}/>}
        </Container>
    )
}

export default MultiRss