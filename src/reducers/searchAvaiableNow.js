import { SEARCH_AVAIABLE_NOW_CHANGE } from '../lib/constants';

export default function searchAvaiableNow(state = [], action) {
  switch(action.type) {
    case SEARCH_AVAIABLE_NOW_CHANGE:
      return action.avaiableNow;
    default:
      return state;
  }
}
