import {
  SEARCH_ROOMS,
  REQUEST_ROOMS,
  RECEIVE_ROOMS,
  REQUEST_ROOMS_FAILURE,
} from '../lib/constants';

export default function rooms(state = [], action) {
  switch(action.type) {
    case SEARCH_ROOMS:
      return state;
    case REQUEST_ROOMS:
      return state;
    case RECEIVE_ROOMS:
      return action.rooms
    case REQUEST_ROOMS_FAILURE:
      return state; // TODO: Return error details
    default:
      return state;
  }
}
