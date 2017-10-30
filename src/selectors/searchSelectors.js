import { createSelector } from 'reselect';

const BASE_TEN = 10;
const getAvaiableNowFilter = (state) => state.searchAvaiableNow;
const getRooms = (state) => state.rooms;

// Find all rooms that have any available time slots matching the current time
export const getAvaiableNowRooms = createSelector(
  [getAvaiableNowFilter, getRooms],
  (searchAvaiableNow, rooms) => {
    if (searchAvaiableNow) {
      const currentTime = new Date();

      return rooms.filter(room => {
        return room.avail.some(range => {
          const timeRange = range.split('-').map(time => time.trim());

          let startingTime = new Date();
          let endingTime = new Date();

          startingTime.setHours(
            parseInt(timeRange[0].split(':')[0], BASE_TEN),   // Hour
            parseInt(timeRange[0].split(':')[1], BASE_TEN),   // Minute
            0
          );
          endingTime.setHours(
            parseInt(timeRange[1].split(':')[0], BASE_TEN),   // Hour
            parseInt(timeRange[1].split(':')[1], BASE_TEN),   // Minute
            0
          );

          return currentTime >= startingTime && currentTime <= endingTime ? true : false;
        });
      });
    } else {
      return rooms;
    }
  }
)

const getRoomName = (state) => state.searchRoomName;

// Find all rooms matching the case-insensitive room name
// along with their current availability
export const getAvaiableNowRoomsFilteredByRoomName = createSelector(
  [getAvaiableNowRooms, getRoomName],
  (availableRooms, roomName) =>
    availableRooms.filter(room => room.name.toLowerCase().indexOf(roomName.toLowerCase()) > -1)
)
