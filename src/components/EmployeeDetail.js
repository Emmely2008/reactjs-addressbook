import React, { Component } from "react";
import { EmployeeConsumer } from "../context";
import { Link, Redirect } from "react-router-dom";

/** This class handles the presenation of the Employee Details page*/
class EmployeeDetail extends Component {
  //TODO: capitalise all words in the string
  capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

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
                        alt={this.capitalize(employee.name.title) + ' ' + this.capitalize(employee.name.first) + ' ' + this.capitalize(employee.name.last)}
                        src={employee.picture.large}
                      />
                    </div>
                    <div className="col-12">
                      <h4 className="text-title">{this.capitalize(employee.name.title) + ' ' + this.capitalize(employee.name.first) + ' ' + this.capitalize(employee.name.last)}</h4>
                    </div>
                    <div className="col-sm-4">
                      <p><strong>{employee.login.username}</strong></p>
                      <p><a className="App-link" href={"mailto:" + employee.email} >{employee.email}</a></p>
                    </div>
                    <div className="col-sm-4">
                      <p><a className="App-link" href={"tel:" + employee.phone} >{employee.phone}</a></p>
                      <p><a className="App-link" href={"tel:" + employee.cell} >{employee.cell}</a></p>
                    </div>
                    <div className="col-sm-4">
                      <p>{this.capitalize(employee.location.street)}</p>
                      <p>{this.capitalize(employee.location.city)}</p>
                      <p>{employee.location.postcode + ' ' + this.capitalize(employee.location.state)}</p>
                    </div>
                    <div className="col-sm-4">
                      <p><strong>DOB:</strong> {employee.dob.date.substring(0, 19)}</p>
                      <p><strong>Registered:</strong> {employee.registered.date.substring(0, 10)}</p>
                    </div>
                    <div className="col-sm-6">
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
