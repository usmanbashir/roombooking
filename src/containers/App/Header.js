import React, { Component } from 'react';
import { Grid, Header as Heading, Image } from 'semantic-ui-react';
import logo from '../../images/1aim-logo.svg';

export default class Header extends Component {
  render() {
    return(
      <Grid.Row className="app-header">
        <Grid.Column width={2} mobile={4} tablet={2} computer={2} largeScreen={2} widescreen={2}>
          <Image src={logo} />
        </Grid.Column>
        <Grid.Column width={14} mobile={12} tablet={14} computer={14} largeScreen={14} widescreen={14} textAlign="right">
          <Heading as="h1">Room Booking</Heading>
        </Grid.Column>
      </Grid.Row>
    );
  }
}
