import { Box } from "@mui/system"
import SingleItemRenderer from "./SingleItemRenderer"
import SingleHeaderRenderer from "./SingleHeaderRenderer"


const MultiRssContentRenderer = ({content}) => {
    


    if(content == null){
        return (
            <div>Choose an RSS channel to display the data</div>
        )
    }
    else{

    console.log(content["items"])
        return (
            <div>
                {content["header"]==null?<></>:<SingleHeaderRenderer header={content["header"]}/>}
                {content["items"].map((item) => {
                    return(
                        <SingleItemRenderer item={item} />
                    // <div>{item["title"]}</div>
                )})}
            </div>
        )
    }
    
    
}


export default MultiRssContentRenderer