import CounterPanel from "./CounterPanel";
import { addCounter } from "../../redux/Counter/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const mapStateToProps = null;

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      onAddCounter: addCounter
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterPanel);
