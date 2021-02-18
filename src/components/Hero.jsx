import React from "react";

const Hero = (props) => {
	return (
		<section className="hero is-medium is-link">
			<div className="hero-body has-text-centered">
				<p className="title">Employee Directory</p>
				<p className="subtitle">
					Click on carrots to filter by heading or use the search box to narrow
					your results.
				</p>
			</div>
		</section>
	);
};

export default Hero;
