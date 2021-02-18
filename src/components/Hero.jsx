import Container from "../Container";
import Hero from "../Hero";
import EmployeeTable from "../EmployeeTable";

function EmployeeDirectory() {
	return (
		<>
			<Hero />
			<Container>
				<EmployeeTable />
			</Container>
		</>
	);
}

export default EmployeeDirectory;
