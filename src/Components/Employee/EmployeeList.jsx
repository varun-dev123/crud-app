import React, { Component } from "react";

class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const renderItems = this.props.items.map((item, i) => (
      <tr key={i}>
        <td>{i + 1}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.contact}</td>
        <td>
          <span onClick={() => this.props.editEmp(i + 1)}>E</span>
          <span onClick={() => this.props.delEmp(i + 1)}>D</span>
        </td>
      </tr>
    ));

    return (
      <section className="emp-tabluar-data">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>C</th>
            </tr>
          </thead>
          <tbody>{renderItems}</tbody>
        </table>
      </section>
    );
  }
}

export default EmployeeList;
