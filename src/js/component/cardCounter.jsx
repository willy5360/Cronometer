import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const CardCounter = props => {
	const [number, setNumber] = useState(0);

	useEffect(() => {
		const Interval = setInterval(() => {
			if (props.isRunning) {
				if (number != props.stopNumber) {
					setNumber(number + 1.0);
				} else {
					setNumber(0);
				}
			}
		}, props.rate);
		return () => clearInterval(Interval);
	}, [number, props.isRunning]);

	useEffect(() => {
		setNumber(0);
	}, [props.isReset]);

	return <div className="BoxNumber">{number}</div>;
};

CardCounter.propTypes = {
	rate: PropTypes.number,
	isRunning: PropTypes.bool,
	isReset: PropTypes.number,
	stopNumber: PropTypes.number
};

export default CardCounter;
