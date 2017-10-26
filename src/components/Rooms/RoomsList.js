import React, { Component } from 'react';
import { Card, Segment } from 'semantic-ui-react';
import Room from './Room';
import './RoomsList.css';

export default class RoomsList extends Component {
  render() {
    const rooms = this.props.rooms.map(room => {
      return (
        <Room key={room.name} room={room} />
      );
    });

    if (rooms.length !== 0) {
      return (
        <Card.Group itemsPerRow={3} stackable>
          {rooms}
        </Card.Group>
      );
    } else {
      return (
        <Segment>
          Sorry, but there are no rooms available at the moment based on your criteria.
        </Segment>
      );
    }
  }
}
