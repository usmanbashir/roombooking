import React, { Component } from 'react';
import { Dimmer, Loader as Spinner, Segment } from 'semantic-ui-react';

export default class Loader extends Component {
  render() {
    if (this.props.loading) {
      return (
        <Segment padded='very' size='large'>
          <Dimmer active inverted>
            <Spinner inverted size='large' inline='centered'>Loading</Spinner>
          </Dimmer>
        </Segment>
      );
    } else {
      return null;
    }
  }
}
