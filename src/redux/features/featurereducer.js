import { FEATURE } from "./featureTypes"
const initialState={
    noOfFeatures:100
}
const featureReducer=(state=initialState,action)=>{
switch(action.type){
    case FEATURE:{
        return {
            ...state,
            // noOfFeatures:state.noOfFeatures-20
            noOfFeatures:state.noOfFeatures-action.payload
        }
    }
    default:return state
}
}
export default featureReducer