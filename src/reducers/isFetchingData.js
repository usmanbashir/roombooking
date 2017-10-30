import { FETCHING_DATA } from '../lib/constants';

export default function changeFetchingData(state = [], action) {
  switch(action.type) {
    case FETCHING_DATA:
      return action.status;
    default:
      return state;
  }
}
