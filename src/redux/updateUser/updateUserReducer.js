import { UPDATE_USER_FAILURE,UPDATE_USER_REQUEST,UPDATE_USER_SUCCESS } from "./updateUserTypes";
const initialState={
    loading:false,
    user:[],
    error:''
}
const UpdateUserReducer=(state=initialState,action)=>{
    switch(action.type){
        case UPDATE_USER_REQUEST:
return{
    ...state,
    loading:true
};
        
        case UPDATE_USER_SUCCESS:
            return{
                loading:false,
                user:action.payload,
                error:''
            };
        
        case UPDATE_USER_FAILURE:
            return{
                loading:false,
                user:[],
                error:action.payload
            };
      default:
        return state;
    }
}
export default UpdateUserReducer
