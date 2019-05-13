import { addCounter, removeCounter } from "../../redux/Counter/actions";
import {
  counterIDsSelector,
  countersSelector
} from "../../redux/Counter/selectors";

import CounterList from "./CounterList";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  counters: countersSelector(state),
  counterIDs: counterIDsSelector(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addCounter,
      removeCounter
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterList);
