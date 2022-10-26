import React, { Component } from "react";

class Button extends Component {
	constructor(props) {
		super(props);
		this.state = "";
	}

	conslg = () => {
		console.log("стартуем");
	};

	loadActualRate = () => {
		console.log("стартуем");
		fetch("http://localhost:7777/notes")
			.then((response) => response.json())
			.then((rates) => {
				console.log(rates);
			});
	};

	render() {
		return (
			<div className="">
				<div onClick={this.loadActualRate}>clicewffewffefk</div>
			</div>
		);
	}
}

export default Button;
