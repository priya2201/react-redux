import { BUY_CATEGORY } from "./categoryTypes"
const initialState={
    noOfCategories:300
}
const categoryReducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_CATEGORY:{
            return{
                noOfCategories:state.noOfCategories-50
            }
        }
        default:
            return state
        
    }
}
export default categoryReducer