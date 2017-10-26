import { SEARCH_ROOMS } from '../lib/constants';

export default function rooms(state = [], action) {
  switch(action.type) {
    case SEARCH_ROOMS:
      console.log(SEARCH_ROOMS);
      return state;
    default:
      return state;
  }
}
