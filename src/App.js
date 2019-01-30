import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import EmployeeList from "./components/EmployeeList";
import EmployeeDetail from "./components/EmployeeDetail";
import Default from "./components/Default";
import { EmployeeProvider } from "./context";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <EmployeeProvider>
        <Switch>
          <div className="App">
            <div className="content">
              <Route path="/detail" component={EmployeeDetail} />
              <Route exact path="/" component={EmployeeList} />
            </div>
          </div>
        </Switch>
      </EmployeeProvider>
    );
  }
}

export default App;
