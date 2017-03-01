import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state) {
return {
    data: state.data,
    navigationState:state.navigationState,
    imageId: state.imageId
  }
}

const App = connect(mapStateToProps, actionCreators)(Main);

export default App;
