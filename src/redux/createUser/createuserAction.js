import { CREATE_USER_FAILURE,CREATE_USER_SUCCESS,CREATE_USER_REQUEST} from "./createUserType"
import axios from 'axios'
export const createUserRequest=()=>{
    return{
type:CREATE_USER_REQUEST
    }
}
export const createUserSuccess = (user) => {
  return {
    type: CREATE_USER_SUCCESS,
    payload: user
  }
}

export const createUserFailure = (error) => {
  return {
    type: CREATE_USER_FAILURE,
    payload: error
  }
}

export const createUser=(userData)=>{
return(dispatch)=>{
    dispatch(createUserRequest())
    axios.post('https://jsonplaceholder.typicode.com/users',userData)
    .then(response=>{
        console.log(response.data); // <-- add this line

        const user=response.data;
        dispatch(createUserSuccess(user))

    })
    .catch(error =>{
        const errorMsg=error.message;
        dispatch(createUserFailure(errorMsg))
        console.error(errorMsg); // <-- add this line

    })
}
}

