import React from 'react';

import CounterList from '../CounterList';
import EditableCounter from '../EditableCounter';
import { CounterValues } from '../Counter/Counter';

import './styles.css';

class CounterDashboard extends React.PureComponent<
  CounterDashboardProps,
  CounterDashboardState
> {
  constructor(props: CounterDashboardProps) {
    super(props);
    this.state = {
      isAdding: false,
    };
  }

  toogleEditableForm = () => {
    this.setState(prevState => ({ isAdding: !prevState.isAdding }));
  };

  handleAddCounter = (counterValues: CounterValues) => {
    const { onAdd } = this.props;
    this.setState({
      isAdding: false,
    });
    onAdd(counterValues);
  };

  render() {
    const { isAdding } = this.state;

    return (
      <div className="counterPanel">
        {!isAdding && (
          <button
            className="button button-add"
            onClick={this.toogleEditableForm}>
            Add new
          </button>
        )}
        {isAdding && (
          <EditableCounter
            onAdd={this.handleAddCounter}
            cancelFallback={this.toogleEditableForm}
          />
        )}
        <CounterList />
      </div>
    );
  }
}

export default CounterDashboard;

export interface CounterDashboardProps {
  onAdd: (values: CounterValues) => void;
}

export interface CounterDashboardState {
  isAdding: boolean;
}
