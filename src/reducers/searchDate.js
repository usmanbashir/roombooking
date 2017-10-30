import { SEARCH_DATE_CHANGE } from '../lib/constants';

export default function searchDate(state = [], action) {
  switch(action.type) {
    case SEARCH_DATE_CHANGE:
      // The date picker always returns an Array. Regardless, of the user selecting single
      // or multiple dates. We only need the single date. So we can discard the rest.
      return (Array.isArray(action.newDate) ? action.newDate[0] : action.newDate).getTime();
    default:
      return state;
  }
}
