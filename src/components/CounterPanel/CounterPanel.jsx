import Counter from '../Counter';
import CounterList from '../CounterList/CounterList';
import EdiatbleCounter from '../Counter/EditableCounter';
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
    // TODO Implement tonight!
  };
  render() {
    const { isAdding } = this.state;
    return (
      <div className='counterPanel'>
        {!isAdding && <button onClick={this.addNewCounter}>Add new</button>}
        {isAdding && <EdiatbleCounter onAddCounter={this.handleAddCounter} />}
        <CounterList />
      </div>
    );
  }
}

export default CounterPanel;
