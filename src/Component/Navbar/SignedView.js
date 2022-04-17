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
import { useDispatch } from 'react-redux';
import { signout } from '../../reducer/signupSlice';



const settings = ['Profile', 'Subscription','Logout'];


const SignedView = () => {

    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    const dispatch = useDispatch()

    const handleLogout = () => {
        localStorage.removeItem("access_token")
        localStorage.removeItem("refresh_token")
        console.log("signing out")
        dispatch(signout())
    }


    
    return (
        <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
        </Tooltip>
        <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
        >
        <MenuItem key={settings[0]} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">Profile</Typography>
        </MenuItem>
        <MenuItem key={settings[1]} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">Subscription</Typography>
        </MenuItem>
        <MenuItem key={settings[2]} onClick={handleCloseUserMenu}>
            <Typography textAlign="center" onClick={handleLogout}>Logout</Typography>
        </MenuItem>
        </Menu>
    </Box>
    )
}
export default SignedView