import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

export default function SignedoutView({setLogged}) {


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };

    const handleClose = () => {
      setOpen(false);
    };
    


  return (
    <div>
      <Button color="secondary" variant="contained" onClick={handleClickOpen}>
        Login
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="xs">
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
            <LoginForm closeForm={handleClose} />
        </DialogContent>
        <DialogActions>
        <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
