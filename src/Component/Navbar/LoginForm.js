import axios from 'axios'
import { TextField } from '@mui/material';
import { useFormik } from 'formik';
import { Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';
import { signin } from '../../reducer/signupSlice';
import { useDispatch } from 'react-redux';


const LoginForm = ({closeForm}) => {


    const [loading, setLoading] = useState(false)


    const dispatch = useDispatch()

    const validate = values => {
        const errors = {};
        if (!values.username) {
          errors.username = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)) {
          errors.username = 'Invalid email address';
        }
        return errors;
      };

    const handleSubmit = async (values) => {
        console.log(values)
        setLoading(true)
        try{
            const result = await axios({
                method:'post',
                url:'http://localhost:8000/api/token/',
                data:values
            })
            localStorage.setItem("access_token", result.data["access"])
            localStorage.setItem("refresh_token", result.data["refresh"])
            dispatch(signin())
            setLoading(false)
            closeForm()
        }
        catch(e){

            // setLoading(false)
            console.log(e)
        }
    }
    

    const formik = useFormik({
        initialValues:{
            first_name:'',
            last_name:'',
            username:'',
            password:''
        },
        validate,
        onSubmit:values => {
            handleSubmit(values)
        }
    })


    return (
        <>
        <form onSubmit={formik.handleSubmit}>
            <TextField
                autoFocus
                margin="dense"
                id="username"
                label="Email Address"
                type="email"
                value = {formik.values.username}
                onChange={formik.handleChange}
                fullWidth
                onBlur={formik.handleBlur}
                variant="standard"
                name="username"
            />
            {formik.errors.username ? <div style={{color:"red"}}>{formik.errors.username}</div> : null}
            <TextField
                autoFocus
                margin="dense"
                id="password"
                label="Password"
                value = {formik.values.password}
                onChange={formik.handleChange}
                type="password"
                fullWidth
                onBlur={formik.handleBlur}
                variant="standard"
                name="password"
            />
            {formik.errors.password ? <div style={{color:"red"}}>{formik.errors.password}</div> : null}
            {/* {loading?<CircularProgress />:<Button variant="contained" sx={{my:2}} type="submit">Login</Button>} */}
            <Button variant="contained" sx={{my:2}} type="submit">Login</Button>
            
        </form>
        </>
    )
}

export default LoginForm