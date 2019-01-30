import React, { Component } from "react";
import Employee from "./Employee";
import { EmployeeConsumer } from "../context";
import PropTypes from "prop-types";

/** This class handles the presenation of the list of employees on in the address book */
class EmployeeList extends Component {


  render() {
    return (
      <React.Fragment>
        <EmployeeConsumer>

          {value => {
            return (
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <input className="form-control form-control-lg my-2" type="text" placeholder="Search" value={value.search} onChange={(evt) => { value.updateSearch(evt); }} />
                  </div>
                </div>

                <div className="row">
                   
                    <div className="col-sm-3 text-left pl-4">
                      <small>Sort by: </small>
                      <span onClick={() => value.sortBy("name")} ><span className="App-link " >Name</span> / <span className="App-link" onClick={() => value.sortBy("city")} >City</span></span>
                     
                 
                      
                    </div>
                 
                    
                </div>
                {value.getEmployees().map(emp => {
                  return (
                    <Employee key={emp.email} employee={emp} />
                  );
                })}
              </div>
            );
          }}
        </EmployeeConsumer>
      </React.Fragment>
    );
  }
}

export default EmployeeList;
