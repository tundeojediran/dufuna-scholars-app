import React, { Component } from "react";

class ScholarForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scholarName: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addScholar = () => {
    this.props.addScholar(this.state.scholarName);
  };

  render() {
    return (
      <div className="d-flex">
        <input
          name="scholarName"
          type="text"
          className="form-control form-control-lg mr-1"
          placeholder="please add a scholars name here..."
          value={this.state.scholarName}
          onChange={this.handleChange}
        />
        <button className="btn btn-md btn-primary" onClick={this.addScholar}>
          Add
        </button>
      </div>
    );
  }
}

export default ScholarForm;
