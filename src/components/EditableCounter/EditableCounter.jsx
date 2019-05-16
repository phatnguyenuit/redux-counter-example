import './EditableCounter.scss';

import React from 'react';

class EditableCounter extends React.Component {
  constructor(props) {
    super(props);
    const { text, value } = this.props;
    this.state = {
      text: text || '',
      value: value || 0
    };
  }
  handleSubmit = () => {
    const { text, value } = this.state;
    const { id, onAddCounter, onEditCounter } = this.props;
    if (!text) return;
    if (!!id) {
      onEditCounter(id, { text, value });
    } else {
      onAddCounter({ text, value: parseInt(value) });
    }
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { id } = this.props;
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
            onChange={this.handleInputChange}
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
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          {isNew && (
            <button onClick={this.handleSubmit} className='button button-add'>
              Add
            </button>
          )}
          {!isNew && (
            <button
              onClick={this.handleSubmit}
              className='button button-update'
            >
              Save
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default EditableCounter;
