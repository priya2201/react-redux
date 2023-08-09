// import { combineReducers } from 'redux';
// // import cakeReducer from './cakes/cakeReducer'; // import the cakeReducer
// import reducer from './icecream/icecreamReducer'

// // const rootReducer = combineReducers({
// //   cakeReducer, // add the cakeReducer to the root reducer
// // });
// const rootReducer=combineReducers({
//     reducer
// })

// export default rootReducer;
export {buyProduct} from './products/productAction'
export {buyCategory} from './categories/categoryAction'
export * from './user/userAction'
export{createUserFailure,createUserSuccess,createUserRequest,createUser} from './createUser/createuserAction'
export * from './updateUser/updateUserAction'
export * from './deleteUser/deleteUserAction'
