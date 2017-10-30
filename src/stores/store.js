import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from '../reducers/root';

const initialState = {
  searchDate: Date.now(),
  searchRoomName: '',
  searchAvaiableNow: false,
  rooms: [],
  isFetchingData: false,
};

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    devToolsEnhancer(),
  )
);

export default store;
