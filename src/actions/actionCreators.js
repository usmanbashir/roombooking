import {
  SEARCH_DATE_CHANGE,
  SEARCH_ROOM_NAME_CHANGE,
  SEARCH_AVAIABLE_NOW_CHANGE,
} from '../lib/constants';

export function changeDate(newDate) {
  return { type: SEARCH_DATE_CHANGE, newDate };
}

export function changeRoomName(newRoomName) {
  return { type: SEARCH_ROOM_NAME_CHANGE, newRoomName };
}

export function changeAvaiableNow(avaiableNow) {
  return { type: SEARCH_AVAIABLE_NOW_CHANGE, avaiableNow };
}
