import React, { Component } from "react";
import { Link } from "react-router-dom";
import { EmployeeConsumer } from "../context";
import {capitalize} from '../services/StringHelper.js';

/** This component renders each individual employee in the list*/
class Employee extends Component {

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
                  src={employee.picture.medium}
                />
              </Link>
            </div>
            <div className="col-9">
              <div className="row">
                <div className="col-lg-5">
                  <p>{capitalize(employee.name.title) + ' ' + capitalize(employee.name.first) + ' ' + capitalize(employee.name.last)}</p>
                  <a className="App-link" href={"mailto:" + employee.email} >{employee.email}</a>
                </div>
                <div className="col-lg-4">
                  <p>{capitalize(employee.location.city)}</p>
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
