import React, { useEffect, useState } from "react";
import CardCounter from "./cardCounter.jsx";

const Home = () => {
	// const [star, setStar] = useState([]);
	const [restart, setRestart] = useState(true);
	const [reset, setReset] = useState(true);

	const ReloadButton = () => {
		return setReset(!reset);
	};

	return (
		<div className="container">
			<div className="NameBox">
				<h1>Counter</h1>
			</div>
			<div className="cronobox">
				<CardCounter
					rate={6000000}
					isRunning={restart}
					isReset={reset}
					stopNumber={9}
				/>
				<CardCounter
					rate={60000}
					isRunning={restart}
					isReset={reset}
					stopNumber={9}
				/>
				<div className="TwoDots">
					<div className="dot"></div>
					<div className="dot"></div>
				</div>
				<CardCounter
					rate={10000}
					isRunning={restart}
					isReset={reset}
					stopNumber={5}
				/>
				<CardCounter
					rate={1000}
					isRunning={restart}
					isReset={reset}
					stopNumber={9}
				/>
			</div>
			<div className="footerButtons ">
				<button
					className="buttonCounter restart"
					onClick={ReloadButton}>
					<i className="fas fa-redo fa-2x"></i>
				</button>
				<button
					className="buttonCounter play"
					onClick={() => {
						setRestart(true);
					}}>
					<i className="far fa-play-circle fa-2x"></i>
				</button>
				<button
					className="buttonCounter pause"
					onClick={() => {
						setRestart(false);
					}}>
					<i className="far fa-pause-circle fa-2x"></i>
				</button>
			</div>
		</div>
	);
};

export default Home;
