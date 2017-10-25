export default function searchDate(state = [], action) {
  switch(action.type) {
    case 'SEARCH_DATE_CHANGE':
      // The date picker always returns an Array. Regardless, of the user selecting single
      // or multiple dates. We only need the single date. So we can discard the rest.
      const newDate = Array.isArray(action.newDate) ? action.newDate[0] : action.newDate;

      return newDate.toLocaleDateString();
    default:
      return state;
  }
}
