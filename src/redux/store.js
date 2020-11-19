import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddlewarefrom from 'redux-thunk';
import appReducer from './app-reducer';




let reducers = combineReducers({
    app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddlewarefrom)); 

export default store;