import "./CounterDashboard.scss";

import CounterList from "../CounterList";
import EditableCounter from "../EditableCounter";
import React from "react";

class CounterDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdding: false
    };
  }
  toogleEditableForm = () => {
    this.setState(prevState => ({ isAdding: !prevState.isAdding }));
  };
  handleAddCounter = counterValues => {
    const { onAdd } = this.props;
    this.setState({
      isAdding: false
    });
    onAdd(counterValues);
  };

  render() {
    const { isAdding } = this.state;

    return (
      <div className="counterPanel">
        <CounterList />
        {!isAdding && (
          <button
            onClick={this.toogleEditableForm}
            className="button button-add"
          >
            Add new
          </button>
        )}
        {isAdding && (
          <EditableCounter
            onAdd={this.handleAddCounter}
            cancelFallback={this.toogleEditableForm}
          />
        )}
      </div>
    );
  }
}

export default CounterDashboard;
