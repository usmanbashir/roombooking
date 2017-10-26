import { SEARCH_ROOM_NAME_CHANGE } from '../lib/constants';

export default function searchRoomName(state = [], action) {
  switch(action.type) {
    case SEARCH_ROOM_NAME_CHANGE:
      return action.newRoomName;
    default:
      return state;
  }
}
