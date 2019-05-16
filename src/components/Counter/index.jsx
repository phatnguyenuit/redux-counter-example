import { decrease, increase, reset, updateCounter } from "../../redux/Counter/actions";
import {
  makeGetCounterTextSelector,
  makeGetCounterValueSelector
} from "../../redux/Counter/selectors";

import Counter from "./Counter";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const makeMapStateToProps = () => {
  const getCounterValueSelector = makeGetCounterValueSelector();
  const getCounterTextSelector = makeGetCounterTextSelector();
  return (state, props) => ({
    value: getCounterValueSelector(state, props),
    text: getCounterTextSelector(state, props)
  });
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      onIncrease: increase,
      onDecrease: decrease,
      onReset: reset,
      onEdit: updateCounter,
    },
    dispatch
  );

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(Counter);
