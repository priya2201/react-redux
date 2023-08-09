import { CREATE_USER_FAILURE,CREATE_USER_SUCCESS,CREATE_USER_REQUEST } from "./createUserType";
const initialState={
    loading:false,
    user:[],
    error:''
}
const CreateUserReducer=(state=initialState,action)=>{
    switch(action.type){
        case CREATE_USER_REQUEST:
return{
    ...state,
    loading:true
};
        
        case CREATE_USER_SUCCESS:
            return{
                loading:false,
                user:action.payload,
                error:''
            };
        
        case CREATE_USER_FAILURE:
            return{
                loading:false,
                user:[],
                error:action.payload
            };
      default:
        return state;
    }
}
export default CreateUserReducer
