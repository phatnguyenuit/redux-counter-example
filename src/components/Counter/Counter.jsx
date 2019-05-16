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
  handleDecrease = () => {
    const { id, onDecrease } = this.props;
    onDecrease(id);
  };
  handleIncrease = () => {
    const { id, onIncrease } = this.props;
    onIncrease(id);
  };
  handleReset = () => {
    const { id, onReset } = this.props;
    onReset(id);
  };
  handleEdit = () => {
    this.setState({
      isEditing: true
    });
  };
  handleDelete = () => {
    const { id, onDelete } = this.props;
    onDelete(id);
  };
  render() {
    const { isEditing } = this.state;
    const { text, value } = this.props;
    if (isEditing) {
      return <EditableCounter onEditCounter={() => console.log('TODO')} />;
    }
    return (
      <div className='counter'>
        <h1 className='title'>{text}</h1>
        <div className='control'>
          <button
            onClick={this.handleDecrease}
            className='button button-decrease'
          >
            -
          </button>
          <div className='value'>
            <span>{value}</span>
          </div>
          <button
            onClick={this.handleDecrease}
            className='button button-increase'
          >
            +
          </button>
        </div>
        <button onClick={this.handleDecrease} className='button button-reset'>
          Reset
        </button>
        <div className='control'>
          <button onClick={this.handleEdit} className='button button-edit'>
            Edit
          </button>
          <button onClick={this.handleDelete} className='button button-delete'>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
