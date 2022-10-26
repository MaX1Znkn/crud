import { Component } from "react";
import Card from "./Card/Card";
class Wrapper extends Component {
	constructor(props) {
		super();
		this.state = { value: "", items: [] };
	}

	onChange = (e) => {
		this.setState((prev) => ({ ...prev, value: e.target.value }));
	};

	getData() {
		fetch("http://localhost:7777/notes")
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
				this.setState((prev) => ({ ...prev, items: response }));
				this.setState((prev) => ({ ...prev, value: "" }));
			});
	}

	onSubmit = (event) => {
		event.preventDefault();
		let value = {
			value: this.state.value,
		};
		fetch("http://localhost:7777/notes", {
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify(value),
		}).then(() => {
			this.getData();
		});
	};

	onDel = (i) => {
		fetch(`http://localhost:7777/notes/${i}`, {
			method: "DELETE",
			headers: {},
		}).then(() => {
			this.getData();
		});
	};

	componentDidMount() {
		this.getData();
	}

	render() {
		return (
			<div>
				<div>
					<h2>Notes</h2>{" "}
					<span
						onClick={() => this.getData()}
						type="button"
						style={{
							color: "green",
							fontSize: "40px",
						}}
						className="material-icons"
					>
						autorenew
					</span>
				</div>

				<div>
					{this.state.items.map((item) => (
						<Card
							value={item.value}
							id={item.id}
							key={item.id}
							onDel={() => this.onDel(item.id)}
						/>
					))}
				</div>

				<div>Новая карточка</div>
				<form onSubmit={this.onSubmit}>
					<textarea
						name="note"
						id="note"
						cols="30"
						rows="5"
						value={this.state.value}
						onChange={(e) => this.onChange(e)}
					></textarea>
					<span
						onClick={this.onSubmit}
						type="button"
						style={{ fontSize: "40px" }}
						className="material-icons"
					>
						add_circle
					</span>
				</form>
			</div>
		);
	}
}

export default Wrapper;
