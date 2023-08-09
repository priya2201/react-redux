import {createStore,applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

// import cakeReducer from './cakes/cakeReducer'
// import reducer from './icecream/icecreamReducer'
// const store=createStore(cakeReducer)
// const store=createStore(reducer)
import logger from 'redux-logger'
import rootReducer from './rootReducer';
// import rootReducer1 from './rootREducer1';
import rootReducerpc from './rootReducerpc';

// const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)))
const store=createStore(rootReducerpc,composeWithDevTools(applyMiddleware(logger,thunk)))


export default store


