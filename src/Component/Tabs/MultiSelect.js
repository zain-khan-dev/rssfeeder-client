import * as React from 'react';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { RSS_VIEWS } from '../../utlity/Constants';
import { Autocomplete } from '@mui/material';
import { TextField } from '@mui/material';
import {useState} from "react"



const MultipleSelect = ({setSelectedChannels}) => {

  const [rssName, setRssName] = useState([])


  const handleFormSubmit = (e) => {
    setSelectedChannels(rssName)
  }


    return (
      <Box  sx={{mt:2, width:"75%",mx:"auto"}} alignItems="center"  textAlign="center">
        <Autocomplete
          multiple
          limitTags={5}
          id="tags-standard"
          options={RSS_VIEWS}
          onChange={(e, value) => setRssName(value)}
          getOptionLabel={(option) => option}
          // defaultValue={[]}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="RSS Channels"
              placeholder="Select rss channels"
            />
          )}
        />
        <Button variant='contained' sx={{my:2}}  type="submit" onClick={handleFormSubmit} >Go</Button>
      </Box>
    )
}





export default MultipleSelect