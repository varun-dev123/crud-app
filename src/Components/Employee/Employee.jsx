import React, { Component } from "react";

import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";

class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      email: "",
      contact: "",
      items: []
    };
  }

  handleChange = event => {
    //console.log(e);
    const { name, type, value, checked } = event.target;

    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  };

  addEmployee = event => {
    event.preventDefault();

    const lastIndex = this.state.items.length + 1;

    console.log(lastIndex);
    //let i = 1;
    const newItem = {
      name: this.state.name,
      email: this.state.email,
      contact: this.state.contact
    };

    //this.setState({ items: [newItem, ...this.state.items] });
    console.log(newItem);
    this.setState({ items: [newItem, ...this.state.items] });

    this.setState({
      id: "",
      name: "",
      email: "",
      contact: ""
    });
  };

  editEmp = id => {
    console.log(id);
  };

  delEmp = id => {
    console.log(id);
    const filteredItems = this.state.items.filter(p => p.id !== id);
    console.log(filteredItems);

    this.setState({ items: filteredItems });
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <EmployeeForm
            empData={this.state}
            handleChange={this.handleChange}
            addEmployee={this.addEmployee}
          />
        </div>
        <div className="col-md-6">
          <EmployeeList
            items={this.state.items}
            editEmp={this.editEmp}
            delEmp={this.delEmp}
          />
        </div>
      </div>
    );
  }
}

export default Employee;
