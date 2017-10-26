import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import Room from './Room';
import './RoomsList.css';

export default class RoomsList extends Component {
  render() {
    const rooms = this.props.rooms.map(room => {
      return (
        <Room key={room.name} room={room} />
      );
    });

    return (
      <Card.Group itemsPerRow={3} stackable>
        {rooms}
      </Card.Group>
    );
  }
}
