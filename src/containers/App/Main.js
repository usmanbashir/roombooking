import React, { Component } from 'react';
import { Container, Divider } from 'semantic-ui-react';
import Header from './Header';
import SearchAndFilters from './SearchAndFilters';
import ActiveResponsiveModes from '../../components/utility/ActiveResponsiveModes';

export default class Main extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Divider />
        <SearchAndFilters {...this.props} />
        <ActiveResponsiveModes />
      </Container>
    );
  }
}
