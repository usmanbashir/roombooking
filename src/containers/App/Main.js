import React, { Component } from 'react';
import { Container, Divider } from 'semantic-ui-react';
import Header from './Header';
import SearchAndFilters from './SearchAndFilters';
import RoomsList from '../../components/Rooms/RoomsList';
import ActiveResponsiveModes from '../../components/utility/ActiveResponsiveModes';
import Loader from '../../components/Loader/Loader';

export default class Main extends Component {
  componentDidMount() {
    this.props.fetchRooms(this.props.searchDate);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.searchDate !== this.props.searchDate) {
      this.props.fetchRooms(nextProps.searchDate);
    }
  }

  render() {
    return (
      <Container>
        <Header />
        <Divider />
        <SearchAndFilters {...this.props} />
        <Divider />
        <Loader loading={this.props.isFetchingData} />
        <RoomsList rooms={this.props.rooms} loading={this.props.isFetchingData} />
        <ActiveResponsiveModes />
      </Container>
    );
  }
}
