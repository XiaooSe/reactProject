import { combineReducers } from 'redux';
import count from './reducers';

const allReducers = {
    count
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;