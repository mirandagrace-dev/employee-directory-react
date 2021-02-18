import React, { Component } from "react";
import EmployeeRows from "./EmployeeRows";
import Search from "./Search";
import axios from "axios";
import "../styles.css";

class EmployeeTable extends Component {
	state = {
		employees: [],
		filteredEmployees: [],
		sort: false,
	};

	componentDidMount() {
		this.getEmployees();
	}

	getEmployees = () => {
		return axios
			.get("https://randomuser.me/api/?results=30&nat=us")
			.then((response) => {
				this.setState({
					employees: response.data.results,
					filteredEmployees: response.data.results,
				});
			});
	};
	handleInputChange = (event) => {
		const searchTerm = event.target.value;
		const filteredEmployees = this.state.employees.filter((employee) => {
			return employee.name.first
				.toLowerCase()
				.includes(searchTerm.toLowerCase());
		});
		this.setState({ filteredEmployees: filteredEmployees });
	};
	// object.values of each employee would be an array of every value so if I do .join I get one long string and then I can search .includes and it will search every column of the employees
	handleNameSort = (event) => {
		this.setState({ sort: !this.state.sort });
		const compare = (a, b) => {
			if (this.state.sort) {
				return b.name.last.localeCompare(a.name.last);
			} else {
				return a.name.last.localeCompare(b.name.last);
			}
		};
		const sorted = this.state.employees.sort(compare);
		this.setState({ filteredEmployees: sorted });
	};

	handleEmailSort = (event) => {
		this.setState({ sort: !this.state.sort });
		const compare = (a, b) => {
			if (this.state.sort) {
				return b.email.localeCompare(a.email);
			} else {
				return a.email.localeCompare(b.email);
			}
		};
		const sorted = this.state.employees.sort(compare);
		this.setState({ filteredEmployees: sorted });
	};

	handleDOBSort = (event) => {
		this.setState({ sort: !this.state.sort });
		const compare = (a, b) => {
			if (this.state.sort) {
				return b.dob.date.localeCompare(a.dob.date);
			} else {
				return a.dob.date.localeCompare(b.dob.date);
			}
		};
		const sorted = this.state.employees.sort(compare);
		this.setState({ filteredEmployees: sorted });
	};
	render() {
		return (
			<>
				<Search
					name="searchTerm"
					value={this.state.searchTerm}
					onChange={this.handleInputChange}
				/>
				<table className="table table-success is-striped is-fullwidth">
					<thead>
						<tr>
							<th>Image</th>
							<th>
								Name{" "}
								<i
									name="name"
									onClick={this.handleNameSort}
									class="fas fa-caret-down"
								></i>
							</th>
							<th>Phone</th>
							<th>
								Email{" "}
								<i
									name="email"
									onClick={this.handleEmailSort}
									class="fas fa-caret-down"
								></i>
							</th>
							<th>
								DOB{" "}
								<i
									name="dob"
									onClick={this.handleDOBSort}
									class="fas fa-caret-down"
								></i>
							</th>
						</tr>
					</thead>
					<tbody>
						{this.state.filteredEmployees.map((employee) => (
							<EmployeeRows {...employee} key={employee.id.value} />
						))}
					</tbody>
				</table>
			</>
		);
	}
}

export default EmployeeTable;
