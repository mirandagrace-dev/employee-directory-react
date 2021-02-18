import React from "react";

const Search = (props) => {
	return (
		<input
			name="searchTerm"
			className="input mt-6 mb-6 searchName"
			type="text"
			placeholder="Search by First Name"
			onChange={props.onChange}
		/>
	);
};

export default Search;
