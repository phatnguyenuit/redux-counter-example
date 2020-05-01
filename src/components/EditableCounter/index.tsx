import React, { MouseEventHandler } from 'react';
import clsx from 'clsx';
import { CounterValues } from '../Counter/Counter';

import './styles.css';

class EditableCounter extends React.PureComponent<
  EditableCounterProps,
  EditableCounterState
> {
  constructor(props: EditableCounterProps) {
    super(props);
    const { text, value } = this.props;
    this.state = {
      text: text || '',
      value: value || 0,
    };
  }
  submit = () => {
    const { text, value } = this.state;
    const { id, onAdd, onEdit } = this.props;
    if (!text) return;
    const counterValues = {
      text,
      value,
    };
    if (id && onEdit) {
      onEdit(id, counterValues);
    } else if (onAdd) {
      onAdd(counterValues);
    }
  };

  handleChangeInput = (fieldName: keyof EditableCounterState) => (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = e.target;

    if (fieldName === 'value') {
      this.setState({
        [fieldName]: Number(value),
      });
    } else {
      this.setState({
        [fieldName]: value,
      });
    }
  };

  render() {
    const { id, cancelFallback } = this.props;
    const { text, value } = this.state;
    const isNew = !!!id;
    return (
      <div className="counter counter-editable" data-testid="counter-editable">
        <div className="form-group">
          <label htmlFor="counterText">Title</label>
          <input
            id="counterText"
            value={text}
            onChange={this.handleChangeInput('text')}
            data-testid="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="value">Value</label>
          <input
            name="value"
            id="value"
            type="number"
            value={value}
            onChange={this.handleChangeInput('value')}
            data-testid="value"
          />
        </div>
        <div>
          <button
            onClick={this.submit}
            className={clsx('button', {
              // eslint-disable-next-line @typescript-eslint/camelcase
              button__add: isNew,
              // eslint-disable-next-line @typescript-eslint/camelcase
              button__update: !isNew,
            })}>
            {isNew ? 'Add' : 'Save'}
          </button>
          <button
            className="button button__cancel"
            onClick={cancelFallback}
            data-testid="button-cancel">
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

export default EditableCounter;

export interface EditableCounterProps extends Partial<CounterValues> {
  id?: number;
  cancelFallback: MouseEventHandler;
  onAdd?: (values: CounterValues) => void;
  onEdit?: (id: number, values: CounterValues) => void;
}

type EditableCounterState = CounterValues;
