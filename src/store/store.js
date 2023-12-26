import { applyMiddleware, combineReducers, createStore } from 'redux';
import { countReducer } from '../reducers/count';
import logger from 'redux-logger';

const rooteReducer = combineReducers({
    count : countReducer,
    // dateCount : ...
})

const store = createStore(rooteReducer, applyMiddleware(logger));

export default store;