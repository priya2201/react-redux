import { BUY_ICECREAM } from "./icecreamTypes";

const initialState={
    noOfIcecream:20
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_ICECREAM:{
            return{
                noOfIcecream:state.noOfIcecream-2
            }
        }
        default:return state
    }
}

export default reducer