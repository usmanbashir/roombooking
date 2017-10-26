import { combineReducers} from 'redux';
import searchDate from './searchDate';
import searchRoomName from './searchRoomName';
import searchAvaiableNow from './searchAvaiableNow';

export default combineReducers({ searchDate, searchRoomName, searchAvaiableNow });
