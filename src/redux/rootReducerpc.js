import { combineReducers } from "redux";
import productReducer from "./products/productReducer";
import categoryReducer from "./categories/categoryReducer";
import UserReducer from "./user/userReducer";
import CreateUserReducer from "./createUser/createUserReducer";
import UpdateUserReducer from "./updateUser/updateUserReducer";
import DeleteUserReducer from "./deleteUser/deleteUserReducer";

const rootReducerpc=combineReducers({
    pro:productReducer,
    cat:categoryReducer,
    user:UserReducer,
    person:CreateUserReducer,
    update:UpdateUserReducer,
    del:DeleteUserReducer

})
export default rootReducerpc