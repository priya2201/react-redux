import { DELETE_USER_REQUEST,DELETE_USER_FAILURE,DELETE_USER_SUCCESS } from "./deleteUserTypes";
import axios from 'axios'
export const deleteUserRequest = () => ({
    type: DELETE_USER_REQUEST
  });
  
  export const deleteUserSuccess = (userId) => ({
    type: DELETE_USER_SUCCESS,
    payload: userId
  });
  
  export const deleteUserFailure = (error) => ({
    type: DELETE_USER_FAILURE,
    payload: error
  });
  
  export const deleteUser=(userId)=>{
    return(dispatch)=>{
        dispatch(deleteUserRequest());
        axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(()=>{
dispatch(deleteUserSuccess(userId))
        })
        .catch((error)=>{
            dispatch(deleteUserFailure(error.message))
        })
    }
  }