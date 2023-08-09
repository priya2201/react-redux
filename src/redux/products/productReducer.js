import { BUY_PRODUCT } from "./productTypes";

const initialState={
    noOfProducts:200
}
const productReducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_PRODUCT:{
            return{
                noOfProducts:state.noOfProducts-20
            }
        }
        default:
            return state
        
    }
}
export default productReducer