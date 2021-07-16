import { combineReducers } from 'redux';

//REDUCER
import Task from './reducers/Taks';
import Inputs from './reducers/Inputs';
import TabBar from './reducers/TabBar';

export default combineReducers({
  Task,
  Inputs,
  TabBar
});