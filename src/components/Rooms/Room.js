import React, { Component } from 'react';
import { Grid, Icon, Button, Card } from 'semantic-ui-react';

export default class Room extends Component {
  render() {
    const { room } = this.props;
    return (
      <Card>
        <Card.Content>
          <Card.Header>
            Room
            <span className='right'>
              {room.name}
            </span>
          </Card.Header>
        </Card.Content>
        <Card.Content>
          <Card.Description>
            <Grid columns={3} textAlign='center' verticalAlign='middle'>
              <Grid.Column>
                <Icon name='location arrow' />
                {room.location}
              </Grid.Column>
              <Grid.Column>
                <Icon name='users' />
                {room.capacity}
              </Grid.Column>
              <Grid.Column>
                <Icon name='resize horizontal' />
                {room.size}
              </Grid.Column>
            </Grid>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button fluid color='olive'>DETAILS</Button>
        </Card.Content>
      </Card>
    );
  }
}
