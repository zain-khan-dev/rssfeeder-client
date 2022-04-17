import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SignedoutView from './SignedoutView';
import { Tab } from '@mui/material';
import SignedView from './SignedView';
import { useState, useEffect } from 'react';
import MenuItems from './MenuItems';
import { useSelector } from 'react-redux';


const ResponsiveAppBar = () => {
    

  
  const logged = useSelector((state) => state.signup.value)


  console.log(logged)

  return (
    <AppBar position="static" sx={{backgroundColor:"black"}} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            RSS Feeder
          </Typography>
          <MenuItems /> 
          {!logged?
          <SignedoutView  />:
          <SignedView/>}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
