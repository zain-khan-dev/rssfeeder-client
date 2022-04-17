import { Container, Tab, Tabs, Box } from "@mui/material"
import { useState } from "react"
import SingleRss from "../Component/Tabs/SingleRss"
import MultiRss from "../Component/Tabs/MultiRss"
import { useSelector } from "react-redux"
import { Avatar } from "@mui/material"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FormControl } from "@mui/material"
import


const Browse = () => {

    const logged = useSelector((state) => state.signup.value)

    return (
        <Container maxWidth="xl">
            <div>
                <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
                    <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                    >
                    {names.map((name) => (
                        <MenuItem key={name} value={name}>
                        <Checkbox checked={personName.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>
            </div>
            <Box display="flex" alignItems="center" flexDirection="column">
                {logged?<MultiRss />:<div>Please login to view</div>}
            </Box>
            
        </Container>
    )
}


export default Browse