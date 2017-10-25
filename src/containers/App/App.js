import React, { Component } from 'react';
import { Container, Grid, Header as Heading, Segment, Divider } from 'semantic-ui-react';
import Header from './Header';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Grid>
          <Header />
          <Divider className="app-header-sep" />

          <Grid.Row>
            <Grid.Column width="16">
              <Segment textAlign="center" raised>
                <Heading>
                  Book a meeting room without hassle.
                </Heading>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
