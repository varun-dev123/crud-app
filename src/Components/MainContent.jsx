import React, { Component } from "react";
import Employee from "./Employee/Employee";
class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4>Add Employee</h4>
              <Employee />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MainContent;
