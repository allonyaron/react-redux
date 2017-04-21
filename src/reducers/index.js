import { combineReducers } from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
	//this is the property used on state in container state.courses;
	//use shorthand property name- if duplicated just use the property name
	courses
});

export default rootReducer;