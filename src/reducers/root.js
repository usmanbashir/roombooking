import { combineReducers} from 'redux';
import searchDate from './searchDate';
import searchRoomName from './searchRoomName';
import searchAvaiableNow from './searchAvaiableNow';
import rooms from './rooms';

export default combineReducers({ searchDate, searchRoomName, searchAvaiableNow, rooms });
