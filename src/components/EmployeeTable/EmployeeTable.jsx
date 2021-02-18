import React, { Component } from "react";
import EmployeeRows from "../EmployeeRows/EmployeeRows";
import Search from "../Search/Search";
import axios from "axios";
import "./EmployeeTable.css";

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
	render() {
		return (
			<>
				<Search
					name="searchTerm"
					value={this.state.searchTerm}
					onChange={this.handleInputChange}
				/>
				<table className="table is-striped is-fullwidth">
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
