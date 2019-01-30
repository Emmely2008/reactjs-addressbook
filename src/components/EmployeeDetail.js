import React, { Component } from "react";
import { EmployeeConsumer } from "../context";
import { Link, Redirect } from "react-router-dom";
import {capitalize} from '../services/StringHelper.js';
/** This class handles the presenation of the Employee Details page*/
class EmployeeDetail extends Component {
  

  render() {
    return (
      <div>
        <Link to="/" className="align-middle" >{"<- Back to list"}</Link>
        <EmployeeConsumer>
          {value => {
            const employee = value.employeeDetail;
            if (employee.name == undefined) {
              return <Redirect to='/' />
            }
            else {
              return (
                <div className="container text-left">
                  <div className="row mt-5">
                    <div className="col-12 py-5">
                      <img className="rounded"
                        alt={capitalize(employee.name.title) + ' ' + capitalize(employee.name.first) + ' ' + capitalize(employee.name.last)}
                        src={employee.picture.large}
                      />
                    </div>
                    <div className="col-12">
                      <h4 className="text-title">{capitalize(employee.name.title) + ' ' + capitalize(employee.name.first) + ' ' + capitalize(employee.name.last)}</h4>
                    </div>
                    <div className="col-md-4">
                      <small>Username:</small><br/>
                      <p><strong>{employee.login.username}</strong></p>
                      <small>Email:</small><br/>
                      <p><a className="App-link" href={"mailto:" + employee.email} >{employee.email}</a></p>
                    </div>
                    <div className="col-md-4">
                      <small>Phone:</small><br/>
                      <p><a className="App-link" href={"tel:" + employee.phone} >{employee.phone}</a></p>
                      <small>Cell:</small><br/>
                      <p><a className="App-link" href={"tel:" + employee.cell} >{employee.cell}</a></p>
                    </div>
                    <div className="col-md-4">
                      <small>Address:</small><br/>
                      <p>{capitalize(employee.location.street)}</p>
                      <p>{capitalize(employee.location.city)}</p>
                      <p>{employee.location.postcode + ' ' + capitalize(employee.location.state)}</p>
                    </div>
                    <div className="col-md-4">
                      <small>Other:</small><br/>
                      <p><strong>DOB:</strong> {employee.dob.date.substring(0, 10)}</p>
                      <p><strong>Registered:</strong> {employee.registered.date.substring(0, 10)}</p>
                    </div>
 
                  </div>
                </div>
              );
            }
          }}
        </EmployeeConsumer>
      </div>
    );
  }
}

export default EmployeeDetail;
