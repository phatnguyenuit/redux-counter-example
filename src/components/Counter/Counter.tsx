import React, { PureComponent } from 'react';

import EditableCounter from '../EditableCounter';
import './styles.css';

class Counter extends PureComponent<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);
    this.state = {
      isEditing: false,
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
  update = (id: number, values: CounterValues) => {
    const { onUpdate } = this.props;
    onUpdate(id, values);
    this.toggleEditing();
  };
  toggleEditing = () => {
    this.setState(prevState => ({
      isEditing: !prevState.isEditing,
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
      <div className="counter" data-testid="counter">
        <div className="button-group button-group--right">
          <button
            onClick={this.toggleEditing}
            className="button button-edit"
            data-testid="button-edit">
            Edit
          </button>
          <button
            onClick={this.delete}
            className="button button-delete"
            data-testid="button-delete">
            Delete
          </button>
        </div>
        <h1 className="title" data-testid="text">
          {text}
        </h1>
        <div className="control">
          <button
            onClick={this.decrease}
            className="button button-decrease"
            data-testid="button-decrease">
            -
          </button>
          <div className="value">
            <span data-testid="value">{value}</span>
          </div>
          <button
            onClick={this.increase}
            className="button button-increase"
            data-testid="button-increase">
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;

export type CounterValues = {
  text: string;
  value: number;
};

export interface CounterProps extends CounterValues {
  id: number;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onDelete: (id: number) => void;
  onUpdate: (id: number, values: CounterValues) => void;
}

export interface CounterState {
  isEditing: boolean;
}
