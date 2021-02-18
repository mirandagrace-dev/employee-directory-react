import Container from "./Container";
import Hero from "./Hero";
import EmployeeTable from "./EmployeeTable";

function EmployeeDirectory() {
	return (
		<>
			<div>
				<Hero />
			</div>

			<Container>
				<EmployeeTable />
			</Container>
		</>
	);
}

export default EmployeeDirectory;
