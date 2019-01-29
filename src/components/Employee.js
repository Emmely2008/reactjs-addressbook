import React, { Component } from "react";
import { Link } from "react-router-dom";
import { EmployeeConsumer } from "../context";

class Employee extends Component {
  capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  render() {
    const employee = this.props.employee;
    return (
      <EmployeeConsumer>
        {value => (
          <div className="row py-5" onClick={() => value.handleDetail(employee)}>
            <div className="col-3" onClick={() => console.log("You clicked me")} >
              <Link to="/detail" className="align-middle" >
                <img
                  className="rounded-circle align-middle middle"
                  alt={employee.name.first + '' + employee.name.last}
                  src={employee.picture.thumbnail}
                />
              </Link>
            </div>
            <div className="col-9">
              <div className="row">
                <div className="col-lg-5">
                  <p>{this.capitalize(employee.name.title) + ' ' + this.capitalize(employee.name.first) + ' ' + this.capitalize(employee.name.last)}</p>
                  <a className="App-link" href={"mailto:" + employee.email} >{employee.email}</a>
                </div>
                <div className="col-lg-4">
                  <p>{this.capitalize(employee.location.city)}</p>
                </div>
                <div className="col-lg-3">
                  <p><a className="App-link" href={"tel:" + employee.phone} >{employee.phone}</a></p>
                  <p><a className="App-link" href={"tel:" + employee.cell} >{employee.cell}</a></p>
                </div>
              </div>
            </div>
          </div>
        )}
      </EmployeeConsumer>
    );
  }
}

export default Employee;
