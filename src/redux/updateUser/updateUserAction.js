import { UPDATE_USER_FAILURE,UPDATE_USER_REQUEST,UPDATE_USER_SUCCESS } from "./updateUserTypes";
import axios from 'axios'

export const updateUserRequest = () => {
    return {
      type: UPDATE_USER_REQUEST
    };
  };
  
  export const updateUserSuccess = (user) => {
    return {
      type: UPDATE_USER_SUCCESS,
      payload: user
    };
  };
  
  export const updateUserFailure = (error) => {
    return {
      type: UPDATE_USER_FAILURE,
      payload: error
    };
  };
  
  export const updateUsers=(userData)=>{
return(dispatch)=>{
dispatch(updateUserRequest())
axios.put(`https://jsonplaceholder.typicode.com/users/${userData.id}`,userData)
.then((response)=>{
const updatedUser=response.data
dispatch(updateUserSuccess(updatedUser))
})
.catch((error)=>{
    const errorMsg=error.message
    dispatch(updateUserFailure(errorMsg))
})
}
  }