export default function searchDate(state = [], action) {
  switch(action.type) {
    case 'SEARCH_DATE_CHANGE':
      const newDate = Array.isArray(action.newDate) ? action.newDate[0] : action.newDate;

      return newDate.toLocaleDateString();
    default:
      return state;
  }
}
