import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import SearchDate from '../../components/SearchDate/SearchDate';

export default class SearchAndFilters extends Component {
  render() {
    return (
      <Segment raised>
        <Grid divided>
          <Grid.Column mobile={16} tablet={7} computer={9} largeScreen={10} widescreen={10}>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={9} computer={7} largeScreen={6} widescreen={6} textAlign='right'>
            <SearchDate searchDate={this.props.searchDate} changeDate={this.props.changeDate} />
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}
