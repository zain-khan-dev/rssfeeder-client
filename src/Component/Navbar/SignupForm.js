import { TextField } from '@mui/material';
import { Formik, useFormik } from 'formik';
import { Button } from '@mui/material';
import axios from 'axios';


const SignupForm = () => {

    const validate = values => {
        const errors = {};
      
        if (!values.first_name) {
            errors.first_name = 'Required';
        } else if (values.first_name.length > 15) {
            errors.first_name = 'Must be 15 characters or less';
        }
        if (!values.last_name) {
            errors.last_name = 'Required';
        } else if (values.last_name.length > 15) {
            errors.last_name = 'Must be 15 characters or less';
        }
        if (!values.username) {
          errors.username = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)) {
          errors.username = 'Invalid email address';
        }
        return errors;
      };

    const handleSubmit = async (values) => {
        console.log(values)
        try{
            const data = await axios({
                method:'post',
                url:'http://localhost:8000/rssfeeder/users/',
                data:values
            })
            console.log(data)
        }
        catch(e){
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

    return(
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
            id="first_name"
            label="First Name"
            type="text"
            value = {formik.values.first_name}
            onChange={formik.handleChange}
            fullWidth
            onBlur={formik.handleBlur}
            variant="standard"
            name="first_name"
        />
        {formik.errors.first_name ? <div style={{color:"red"}}>{formik.errors.first_name}</div> : null}
        <TextField
            autoFocus
            margin="dense"
            id="last_name"
            label="Last Name"
            value = {formik.values.last_name}
            onChange={formik.handleChange}
            type="text"
            fullWidth
            onBlur={formik.handleBlur}
            variant="standard"
            name="last_name"
        />
        {formik.errors.last_name ? <div style={{color:"red"}}>{formik.errors.last_name}</div> : null}
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
        <Button variant="contained" sx={{my:2}} type="submit">Singup</Button>
      </form>
    )

}



export default SignupForm