import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';
import Main from './Main';
import { getAvaiableNowRoomsFilteredByRoomName } from '../../selectors/searchSelectors';
import './App.css';

function mapStateToProps(state) {
  return {
    searchDate: state.searchDate,
    searchRoomName: state.searchRoomName,
    searchAvaiableNow: state.searchAvaiableNow,
    rooms: getAvaiableNowRoomsFilteredByRoomName(state),
  };
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;
