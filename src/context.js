import React, { Component } from "react";
import axios from "axios";
const EmployeeContext = React.createContext();
const NUMBER_OF_EMPLOYEES = 100;
const SEED = '123';

//Employee Provider
/** Handles the logic of Employees and Employee detail as well as sorting and searching (filtering) the list of employees  */
class EmployeeProvider extends Component {
  state = {
    search: '',
    employees: [],
    filteredEmployees: [],
    employeeDetail: {},
    sortingNameAsc: true,
    sortingCityAsc: true
  };

  componentDidMount() {
    this._fetchEmployees();
    this._resetEmployeeDetail();
  }
  // Private method that fetches the employees from the API
  _fetchEmployees() {
    axios
      .get(`https://randomuser.me/api/?results=${NUMBER_OF_EMPLOYEES}&seed=${SEED}`)
      .then(response => {

        let result = [];

        if (response.data.results) {
          result = response.data.results;
        }
        this.setState(() => {
          return { employees: result, filteredEmployees: result };
        });
      });
  }
  // Private method sorts a list by firstname and lastname.
  _sortByName(list) {

    if (this.state.sortingNameAsc) {
      return list.sort((a, b) => a.name.first.localeCompare(b.name.first)).sort((a, b) => a.name.last.localeCompare(b.name.last));
      console.log('Asc');
    } else {
      return list.sort((a, b) => b.name.first.localeCompare(a.name.first)).sort((a, b) => b.name.last.localeCompare(a.name.last));
      console.log('Dsc');
    }
  }
  // Private method sorts a list by city name.
  _sortByCity(list) {

    if (this.state.sortingCityAsc) {
      return list.sort((a, b) => a.location.city.localeCompare(b.location.city));
    } else {
      return list.sort((a, b) => b.location.city.localeCompare(a.location.city));
    }
  }
  // Private method: resets filter employee list.
  _resetFilteredEmployees() {

    let temp = [];
    temp = this.state.employees;

    this.setState(() => {
      return { filteredEmployees: temp };
    });


  }
  _resetEmployeeDetail() {
    this.setState(() => {
      return {};
    });
  }
  // Filters on a single tring TODO: filter on a list of strings
  updateSearch = (event) => {
    this._resetFilteredEmployees();
    let str = event.target.value.toString().toLowerCase();
    this.setState({ search: str });
    const result = this.state.employees;
    result.filter((emp) => {
      return emp.name.first.indexOf(str) !== -1;
    });
    this.setState(() => {
      return {
        filteredEmployees: result.filter((emp) => {
          return emp.name.first.indexOf(str) !== -1 || emp.name.last.indexOf(str) !== -1 || emp.location.city.indexOf(str) !== -1;
        })
      };
    });

  }

  // This updates the Employee detail to be displayed on the details page.
  setEmployeeDetail(emp) {
    this.setState(() => {
      return { employeeDetail: emp };
    });
  }

  // This methods sorts asc / desc by name or city
  sortBy = sort => {

    let resultEmployees = [];
    let resultFilteredEmployees = [];
    let tempEmployees = this.state.employees;
    let tempFilteredEmployees = this.state.filteredEmployees;

    switch (sort) {
      case "name":
        this.setState(prevState => ({
          sortingNameAsc: !prevState.sortingNameAsc
        }));
        resultFilteredEmployees = this._sortByName(tempFilteredEmployees);
        resultEmployees = this._sortByName(tempEmployees);
        break;
      case "city":
        this.setState(prevState => ({
          sortingCityAsc: !prevState.sortingCityAsc
        }));
        resultFilteredEmployees = this._sortByCity(tempFilteredEmployees);
        resultEmployees = this._sortByCity(tempEmployees);
        break;
      default:
        console.log("switch default");
    }

    this.setState(() => {
      return { mployees: tempEmployees, filteredEmployees: tempFilteredEmployees };
    });

  }

  getEmployees = () => {
    return this.state.filteredEmployees;
  };

  handleDetail = emp => {
    this._resetEmployeeDetail();
    this.setEmployeeDetail(emp);
  };

  render() {
    return (
      <EmployeeContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          sortBy: this.sortBy,
          updateSearch: this.updateSearch,
          getEmployees: this.getEmployees
        }}
      >
        {this.props.children}
      </EmployeeContext.Provider>
    );
  }
}

const EmployeeConsumer = EmployeeContext.Consumer;
export { EmployeeProvider, EmployeeConsumer };
