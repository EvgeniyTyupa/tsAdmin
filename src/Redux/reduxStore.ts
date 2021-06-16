import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunkMiddlware from 'redux-thunk';
//@ts-ignore
import multi from 'redux-multi'
import userReducer from './User/userReducer';
import commonReducer from './Common/commonReducer';

let rootReducer = combineReducers({
    user: userReducer,
    common: commonReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

const store = createStore(rootReducer, applyMiddleware(thunkMiddlware, multi))

//@ts-ignore
window.store = store

export default store