import React, { Component } from 'react';
import { Container, Grid, Divider } from 'semantic-ui-react';
import Header from './Header';
import SearchDate from '../../components/SearchDate/SearchDate';

export default class Main extends Component {
  render() {
    return (
      <Container>
        <Grid>
          <Header />
          <Divider className="app-header-sep" />
          <SearchDate searchDate={this.props.searchDate} changeDate={this.props.changeDate} />
        </Grid>
      </Container>
    );
  }
}
