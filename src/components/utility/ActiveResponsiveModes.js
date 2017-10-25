import React, { Component } from 'react';
import { Responsive, Segment, Divider } from 'semantic-ui-react';

export default class ActiveResponsiveModes extends Component {
  render() {
    if (process.env.NODE_ENV !== 'production') {
      return (
        <div>
          <Divider />
          <Segment.Group>
              <Responsive as={Segment} {...Responsive.onlyMobile}>Mobile</Responsive>
              <Responsive as={Segment} {...Responsive.onlyTablet}>Tablet</Responsive>
              <Responsive as={Segment} {...Responsive.onlyComputer}>Computer</Responsive>
              <Responsive as={Segment} {...Responsive.onlyLargeScreen}>Large Screen</Responsive>
              <Responsive as={Segment} {...Responsive.onlyWidescreen}>Widescreen</Responsive>
            </Segment.Group>
        </div>
      );
    } else {
      return null;
    }
  }
}
