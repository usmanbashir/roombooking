import React, { Component } from 'react';
import { Grid, Segment, Button } from 'semantic-ui-react';
import 'flatpickr/dist/themes/dark.css'
import Flatpickr from 'react-flatpickr';

export default class SearchDate extends Component {
  render() {
    const { searchDate, changeDate } = this.props;
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return (
      <Grid.Row>
        <Grid.Column mobile="16">
          <Segment textAlign='right' raised>
            <Button basic size='big'icon='calendar'
                    content={ (new Date(searchDate)).toLocaleDateString('en-DE', options) }
                    label={{ as: 'i', icon: 'chevron down' }}
                    onClick={
                      () => {
                        if (this.datePicker && this.datePicker.flatpickr) {
                          this.datePicker.flatpickr.open();
                        }
                      }
                    }
            />
            <div className="invisible">
              <Flatpickr
                className='search-date-picker'
                options={{
                  enableTime: false,
                  clickOpens: false,
                  altInput: false,
                  minDate: 'today',
                  maxDate: new Date().fp_incr(366)
                }}
                value={ new Date(searchDate) }
                ref={ datePicker => { this.datePicker = datePicker } }
                onChange={ newDate => changeDate(newDate) } />
            </div>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    );
  }
}
