import React from "react";

class EditableCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      value: 0
    };
  }
  handleAddCounter = () => {
    const { text, value } = this.state;
    const { onAddCounter } = this.props;
    if (!text) return;
    onAddCounter({ text, value: parseInt(value) });
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { text, value } = this.state;
    return (
      <div>
        <div>
          <label htmlFor="counterText">Title</label>
          <input
            name="text"
            id="counterText"
            value={text}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="counterValue">Value</label>
          <input
            name="value"
            id="counterValue"
            type="number"
            value={value}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <button onClick={this.handleAddCounter}>ADD</button>
        </div>
      </div>
    );
  }
}

export default EditableCounter;
