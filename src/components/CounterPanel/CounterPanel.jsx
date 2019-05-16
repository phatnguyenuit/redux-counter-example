import './CounterPanel.scss';

import CounterList from '../CounterList';
import EditableCounter from '../EditableCounter';
import React from 'react';

class CounterPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdding: false
    };
  }
  addNewCounter = e => {
    this.setState({
      isAdding: true
    });
  };
  handleAddCounter = counterValues => {
    const { onAddCounter } = this.props;
    this.setState({
      isAdding: false
    });
    onAddCounter(counterValues);
  };
  render() {
    const { isAdding } = this.state;

    return (
      <div className='counterPanel'>
        {!isAdding && (
          <button onClick={this.addNewCounter} className='button button-add'>
            Add new
          </button>
        )}
        {isAdding && <EditableCounter onAddCounter={this.handleAddCounter} />}
        <CounterList />
      </div>
    );
  }
}

export default CounterPanel;
