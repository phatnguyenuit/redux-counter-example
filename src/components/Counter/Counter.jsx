import './Counter.scss';

import React, { Component } from 'react';

import EditableCounter from '../EditableCounter';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
  }
  decrease = () => {
    const { id, onDecrease } = this.props;
    onDecrease(id);
  };
  increase = () => {
    const { id, onIncrease } = this.props;
    onIncrease(id);
  };
  reset = () => {
    const { id, onReset } = this.props;
    onReset(id);
  };
  edit = () => {
    this.setState({
      isEditing: true
    });
  };
  delete = () => {
    const { id, onDelete } = this.props;
    onDelete(id);
  };
  update = () => values => {
    const { onUpdate } = this.props;
    onUpdate(values);
  };
  render() {
    const { isEditing } = this.state;
    const { text, value } = this.props;
    if (isEditing) {
      return <EditableCounter onEdit={this.update} />;
    }
    return (
      <div className='counter'>
        <h1 className='title'>{text}</h1>
        <div className='control'>
          <button onClick={this.decrease} className='button button-decrease'>
            -
          </button>
          <div className='value'>
            <span>{value}</span>
          </div>
          <button onClick={this.increase} className='button button-increase'>
            +
          </button>
        </div>
        <button onClick={this.reset} className='button button-reset'>
          Reset
        </button>
        <div className='control'>
          <button onClick={this.edit} className='button button-edit'>
            Edit
          </button>
          <button onClick={this.delete} className='button button-delete'>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
