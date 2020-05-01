import { connect } from 'react-redux';

import { RootState } from 'redux/rootReducer';
import { counterIDsSelector, countersSelector } from 'redux/Counter/selectors';

import CounterList from './CounterList';

const mapStateToProps = (state: RootState) => ({
  counters: countersSelector(state),
  counterIDs: counterIDsSelector(state),
});

export default connect(mapStateToProps)(CounterList);
