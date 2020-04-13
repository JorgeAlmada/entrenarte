import counterReducer from './counter';
import coursesReducer from './courses';
import selectedcourseReducer from './selectedcourse';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counterReducer,
    coursesReducer,
    selectedcourseReducer
})

export default allReducers;