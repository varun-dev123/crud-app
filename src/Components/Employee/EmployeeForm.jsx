import React, { Component } from "react";

class EmployeeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form action="">
        <div className="employeeForm">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={this.props.empData.name}
              onChange={event => this.props.handleChange(event)}
            />
            {this.props.empData.name}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={this.props.empData.email}
              onChange={event => this.props.handleChange(event)}
            />
            {this.props.empData.email}
          </div>
          <div className="form-group">
            <label>Contact</label>
            <input
              type="text"
              name="contact"
              value={this.props.empData.contact}
              onChange={event => this.props.handleChange(event)}
            />
            {this.props.empData.contact}
          </div>
          <div className="form-group">
            <button
              className="addEmp-btn"
              onClick={event => this.props.addEmployee(event)}
            >
              Add Employee
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default EmployeeForm;
