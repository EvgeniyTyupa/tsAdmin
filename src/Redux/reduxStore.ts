import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunkMiddlware from 'redux-thunk';
//@ts-ignore
import multi from 'redux-multi'

let rootReducer = combineReducers({

})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

const store = createStore(rootReducer, applyMiddleware(thunkMiddlware, multi))

//@ts-ignore
window.store = store

export default store