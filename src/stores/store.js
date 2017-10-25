import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from '../reducers/root';

const initialState = {
  searchDate: (new Date()).toLocaleDateString()
};

const store = createStore(rootReducer, initialState, devToolsEnhancer());

export default store;
