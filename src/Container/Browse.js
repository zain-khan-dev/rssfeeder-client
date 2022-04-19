import { Container, Tab, Tabs, Box, InputLabel, Select, MenuItem, Checkbox, ListItemText, OutlinedInput } from "@mui/material"
import { useState } from "react"
import SingleRss from "../Component/Tabs/SingleRss"
import MultiRss from "../Component/Tabs/MultiRss"
import { useSelector } from "react-redux"
import { Avatar } from "@mui/material"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { FormControl } from "@mui/material"
import * as React from "react"
import MultipleSelect from "../Component/Tabs/MultiSelect"


const Browse = () => {

    const logged = useSelector((state) => state.signup.value)

    return (
        <Container maxWidth="xl">
            <Box display="flex" alignItems="center" flexDirection="column">
                {logged?<MultiRss />:<div>Please login to view</div>}
            </Box>
            
        </Container>
    )
}


export default Browse