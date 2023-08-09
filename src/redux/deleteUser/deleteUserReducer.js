import { DELETE_USER_FAILURE,DELETE_USER_REQUEST,DELETE_USER_SUCCESS } from "./deleteUserTypes";
const initialState={
    loading:false,
    user:[],
    error:''
}
const DeleteUserReducer=(state=initialState,action)=>{
    switch(action.type){
        case DELETE_USER_REQUEST:
return{
    ...state,
    loading:true
};
        
        case DELETE_USER_SUCCESS:
            return{
                loading:false,
                user:action.payload,
                error:''
            };
        
        case DELETE_USER_FAILURE:
            return{
                loading:false,
                user:[],
                error:action.payload
            };
      default:
        return state;
    }
}
export default DeleteUserReducer
