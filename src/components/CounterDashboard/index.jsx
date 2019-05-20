import CounterDashboard from "./CounterDashboard";
import { add } from "../../redux/Counter/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const mapStateToProps = null;

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      onAdd: add
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterDashboard);
