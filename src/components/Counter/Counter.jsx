import "./Counter.scss";

import React, { Component } from "react";

import EditableCounter from "../EditableCounter";

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
  delete = () => {
    const { id, onDelete } = this.props;
    onDelete(id);
  };
  update = (id, values) => {
    const { onUpdate } = this.props;
    onUpdate(id, values);
    this.toggleEditing();
  };
  toggleEditing = () => {
    this.setState(prevState => ({
      isEditing: !prevState.isEditing
    }));
  };
  render() {
    const { isEditing } = this.state;
    const { id, text, value } = this.props;
    if (isEditing) {
      return (
        <EditableCounter
          id={id}
          text={text}
          value={value}
          onEdit={this.update}
          cancelFallback={this.toggleEditing}
        />
      );
    }
    return (
      <div className="counter">
        <div className="button-group button-group--right">
          <button onClick={this.toggleEditing} className="button button-edit">
            Edit
          </button>
          <button onClick={this.delete} className="button button-delete">
            Delete
          </button>
        </div>
        <h1 className="title">{text}</h1>
        <div className="control">
          <button onClick={this.decrease} className="button button-decrease">
            -
          </button>
          <div className="value">
            <span>{value}</span>
          </div>
          <button onClick={this.increase} className="button button-increase">
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
