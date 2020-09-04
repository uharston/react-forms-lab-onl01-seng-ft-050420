import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      maxChars: props.maxChars,
      inputValue: ""
    };
  }

  handleChange = e => {
    let newChar = e.target.value
    this.setState({
      inputValue: newChar
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} type="text" name="message" id="message" value={this.state.inputValue}/>
        <p>This many left {this.state.maxChars - this.state.inputValue.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
