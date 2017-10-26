import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from '../reducers/root';
import rooms from '../data/rooms';

const initialState = {
  searchDate: (new Date()).toLocaleDateString(),
  searchRoomName: '',
  searchAvaiableNow: false,
  rooms,
};

const store = createStore(rootReducer, initialState, devToolsEnhancer());

export default store;
