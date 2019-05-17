import './EditableCounter.scss';

import React from 'react';
import classNames from 'classnames';

class EditableCounter extends React.Component {
  constructor(props) {
    super(props);
    const { text, value } = this.props;
    this.state = {
      text: text || '',
      value: value || 0
    };
  }
  submit = () => {
    const { text, value } = this.state;
    const { id, onAdd, onEdit } = this.props;
    if (!text) return;
    if (!!id) {
      onEdit(id, { text, value });
    } else {
      onAdd({ text, value: parseInt(value) });
    }
  };

  changeInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { id, cancelFallback } = this.props;
    const { text, value } = this.state;
    const isNew = !!id;
    return (
      <div className='editableCounter'>
        <div className='title'>
          <label htmlFor='counterText'>Title</label>
          <input
            name='text'
            id='counterText'
            className='counterText'
            value={text}
            onChange={this.changeInput}
          />
        </div>
        <div className='value'>
          <label htmlFor='counterValue'>Value</label>
          <input
            name='value'
            id='counterValue'
            className='counterValue'
            type='number'
            value={value}
            onChange={this.changeInput}
          />
        </div>
        <div>
          <button
            onClick={this.submit}
            className={classNames('button', {
              'button-add': isNew,
              'button-update': !isNew
            })}
          >
            {isNew ? 'Add' : 'Save'}
          </button>
          <button className='button button-cancel' onClick={cancelFallback}>
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

export default EditableCounter;
