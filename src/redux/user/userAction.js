import { FETCH_REQUEST,FETCH_FAILURE,FETCH_SUCCESS } from "./userTypes"
import axios from 'axios'
export const fetchRequest=()=>{
    return{
        type:FETCH_REQUEST
    }
}
export const fetchSuccess=(users)=>{
    return{
        type:FETCH_SUCCESS,
        payload:users
    }
}

export const fetchFailure=(error)=>{
    return{
        type:FETCH_FAILURE,
        payload:error
    }
}

export const fetchUsers=()=>{
    return(dispatch)=>{
        dispatch(fetchRequest)
axios.get('https://jsonplaceholder.typicode.com/users')
.then(response =>{
    const users=response.data
    dispatch(fetchSuccess(users))
})
.catch(error =>{
    const errorMsg=error.message
    dispatch(fetchFailure(errorMsg))
})
    }
}