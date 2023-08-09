import { HIGH_FEATURE } from "./HighFeatureTypes"
const initialState={
    HighNoOfFeatures:150
}
const highFeatureReducer=(state=initialState,action)=>{
switch(action.type){
    case HIGH_FEATURE:{
        return {
            ...state,
            HighNoOfFeatures:state.HighNoOfFeatures-20
        }
    }
    default:return state
}
}
export default highFeatureReducer