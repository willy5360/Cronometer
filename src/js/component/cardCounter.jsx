import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const CardCounter = props => {
	const [number, setNumber] = useState(0);

	useEffect(() => {
		const Interval = setInterval(() => {
			if (number < 9) {
				setNumber(number + 1);
			} else {
				setNumber(0);
			}
		}, props.rate);
		return () => clearInterval(Interval);
	}, [number]);

	return <div className="BoxNumber">{number}</div>;
};
CardCounter.propTypes = {
	rate: PropTypes.number
};

export default CardCounter;
