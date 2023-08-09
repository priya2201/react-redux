import { combineReducers } from "redux";
import highFeatureReducer from "./MoreFeatures/highFeatureReducer";
import featureReducer from "./features/featurereducer";
const rootReducer1=combineReducers({
    feature:featureReducer,
    highFeature:highFeatureReducer
})
export default rootReducer1