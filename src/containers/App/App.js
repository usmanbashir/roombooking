import React, { Component } from 'react';
import { Container, Grid, Header, Image, Segment } from 'semantic-ui-react';
import logo from '../../images/1aim-logo.svg';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column mobile="16" textAlign="center" className="App-header">
              <Header as="h1">
                <Image src={logo} verticalAlign="top" />
                Room Booking
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column mobile="16">
              <Segment textAlign="center">
                Book a meeting room without hassle.
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
