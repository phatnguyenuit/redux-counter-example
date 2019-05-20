import {
  counterIDsSelector,
  countersSelector
} from "../../redux/Counter/selectors";

import CounterList from "./CounterList";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  counters: countersSelector(state),
  counterIDs: counterIDsSelector(state)
});

export default connect(mapStateToProps)(CounterList);
