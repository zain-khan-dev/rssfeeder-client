import { Container, Box, Paper, Typography } from "@mui/material"


const About = () => {
    return(
        <Container maxWidth={"xl"}>
            <Typography 
                variant="h3"
                component={"div"}
                textAlign="center"
                > ABOUT
            </Typography>
            <Box component="div" textAlign={"center"}>
                <Box component="div" sx={{my:2}}>This is my first paragraph about my site</Box>
                <Box component="div" sx={{my:2}}>This paragraph will outline things about me</Box>
                <Box component="div" sx={{my:2}}>This will tell about the roadmap of the website</Box>
            </Box>
        </Container>
        
    )
}


export default About