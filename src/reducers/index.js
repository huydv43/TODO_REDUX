import { combineReducers } from 'redux';
import tasks from './tasks';
const allReducer = combineReducers({
    tasks: tasks
});
export default allReducer;