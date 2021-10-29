import React from "react";
import CardCounter from "./cardCounter.jsx";

// const Cronometer = [
// 	{
// 		rate: 100000
// 	},
// 	{
// 		rate: 10000
// 	},
// 	{
// 		rate: 1000
// 	}
// ];

//create your first component
const Home = () => {
	// let Mapeo = Cronometer.map((paramenter, index) => {
	// 	return <CardCounter key={index.toString()} rate={paramenter.rate} />;
	// });
	return (
		<div className="container">
			<div className="NameBox">
				<h1>Cronometer</h1>
			</div>
			<div className="cronobox">
				<CardCounter rate={1000000} />
				<CardCounter rate={100000} />
				<div className="TwoDots">
					<div className="dot"></div>
					<div className="dot"></div>
				</div>
				<CardCounter rate={10000} />
				<CardCounter rate={1000} />
			</div>
		</div>
	);
};

export default Home;
