import {
  decrease,
  increase,
  remove,
  update
} from "../../redux/Counter/actions";

import Counter from "./Counter";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      onIncrease: increase,
      onDecrease: decrease,
      onUpdate: update,
      onDelete: remove
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(Counter);
