import {
  SEARCH_DATE_CHANGE,
  SEARCH_ROOM_NAME_CHANGE,
  SEARCH_AVAIABLE_NOW_CHANGE,
  REQUEST_ROOMS,
  RECEIVE_ROOMS,
  REQUEST_ROOMS_FAILURE,
  API_PATH,
  FETCHING_DATA,
} from '../lib/constants';
import 'whatwg-fetch';

export function changeDate(newDate) {
  return { type: SEARCH_DATE_CHANGE, newDate };
}

export function changeRoomName(newRoomName) {
  return { type: SEARCH_ROOM_NAME_CHANGE, newRoomName };
}

export function changeAvaiableNow(avaiableNow) {
  return { type: SEARCH_AVAIABLE_NOW_CHANGE, avaiableNow };
}

export function changeFetchingData(status) {
  return { type: FETCHING_DATA, status };
}

export function requestRooms(date) {
  return { type: REQUEST_ROOMS, date };
}

export function receiveRooms(date, data) {
  return {
    type: RECEIVE_ROOMS,
    date,
    rooms: data,
    receivedAt: Date.now()
  };
}

export function requestRoomsFailure(error) {
  return { type: REQUEST_ROOMS_FAILURE, error };
}

// Async action
export function fetchRooms(date) {
  return dispatch => {
    dispatch(requestRooms(date));
    dispatch(changeFetchingData(true));

    return fetch(API_PATH + 'getrooms/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        date: date
      })
    }).then(response => response.json())
      .then(data => {
        if (Object.keys(data).includes('error')) {
          return dispatch(requestRoomsFailure(data));
        } else {
          return dispatch(receiveRooms(date, data));
        }
      })
      .then(() => dispatch(changeFetchingData(false)))
  };
}
