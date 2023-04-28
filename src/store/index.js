// import { composeWithDevTools } from '@redux-devtools/extension';
import { legacy_createStore as createStore, combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { counterReducer } from './counterReducer'


const rootReducer = combineReducers({
    user: userReducer,
    counter: counterReducer,
})


export const store = createStore(rootReducer)