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
import { Link } from 'react-router-dom';
import { Autocomplete } from '@mui/material';
import { TextField } from '@mui/material';
import { RSS_VIEWS } from '../../utlity/Constants';
import { InputAdornment } from '@mui/material';
import { AccountCircle } from '@material-ui/icons';
import SearchIcon from "@material-ui/icons/Search";


const pages = [ {url:"browse",name:'Browse'},{url:"dynamic", name:"Dynamic RSS"},{url:"explore", name:"Explore"}, {url:'about', name:"About"}];
const MenuItems = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
        
    };
    
    
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };




    return (
        <>
          {/* Render for small devices*/}
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                  <Link to={`/${page.url}`} style={{textDecoration:"none", color:"black"}}>
                    <MenuItem key={page.url} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.name}</Typography>
                    </MenuItem>
                </Link>
              ))}
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={RSS_VIEWS}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Movie" />}
              />
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            RSS Feeder
          </Typography>
          {/* Render for large screen */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
                <Link to={`/${page.url}`} style={{textDecoration:"none"}}>
                    <Button
                        key={page.url}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        {page.name}
                    </Button>
              </Link>
            ))}
            <Autocomplete
                id="combo-box-demo"
                options={RSS_VIEWS}
                variant="underlined"
                sx={{flexGrow:"1",mx:"15%", height:"fit-content", mt:1, borderRadius:"10px",fontSize:"12px", backgroundColor:"white"}}
                renderInput={(params) => <TextField {...params}  
                InputProps={{ ...params.InputProps,
                  endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>)
                  }}
                  />}
              />
          </Box>
        </>
    )
}


export default MenuItems