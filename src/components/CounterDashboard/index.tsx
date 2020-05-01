import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { add } from 'redux/Counter/actions';
import CounterDashboard from './CounterDashboard';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      onAdd: add,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(CounterDashboard);
