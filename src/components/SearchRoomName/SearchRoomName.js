import React, { Component } from 'react';
import { Grid, Input, Checkbox } from 'semantic-ui-react';
import './SearchRoomName.css';

export default class SearchRoomName extends Component {
  render() {
    const { changeRoomName, changeAvaiableNow } = this.props;

    return (
      <Grid className='search-room-name'>
        <Grid.Column mobile={16} tablet={16} computer={9} largeScreen={7} widescreen={7}>
          <Input className='room-name' icon='search' placeholder='Room Name...' size='big'
                 onChange={(e, input) => changeRoomName(input.value)} />
        </Grid.Column>
        <Grid.Column className='avaiable-now'
                     mobile={16} tablet={16} computer={7} largeScreen={7} widescreen={7} verticalAlign='middle'>
          <Checkbox label='Avaiable Now' toggle
                    onChange={(e, input) => changeAvaiableNow(input.checked)} />
        </Grid.Column>
      </Grid>
    );
  }
}
