import React, { Component } from "react";
import Header from "./components/Header";
import ScholarForm from "./ScholarForm";
import ScholarsList from "./ScholarsList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scholarsList: []
    };
  }

  addScholar = scholarName => {
    //adding scholar name to the top of the list
    const updatedScholars = [...this.state.scholarsList];
    updatedScholars.unshift(scholarName);

    this.setState({ scholarsList: updatedScholars });
  };

  render() {
    return (
      <div className="container p-4">
        <Header />
        <ScholarForm addScholar={this.addScholar} />
        <ScholarsList scholars={this.state.scholarsList} />
      </div>
    );
  }
}

export default App;
