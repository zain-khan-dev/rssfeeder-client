import {createSlice} from '@reduxjs/toolkit'


export const signupSlice = createSlice({
    name: 'signup',
    initialState: {
        value:(localStorage.getItem("access_token") != null)
    },
    reducers:{
        signin: (state)=>{  
            state.value = true
        },
        signout: (state) => {
            state.value = false
        }
    }
})


export const {signin, signout} = signupSlice.actions
export default signupSlice.reducer