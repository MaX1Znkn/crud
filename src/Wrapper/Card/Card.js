const Card = ({ value, id, onDel }) => {
	return (
		<div id={id} style={{ display: "flex" }}>
			<div
				style={{
					border: "solid",
					minWidth: "100px",
					marginBottom: "5px",
				}}
			>
				<p>{value}</p>
				<span type="button" className="material-icons" onClick={onDel}>
					delete
				</span>
			</div>
		</div>
	);
};

export default Card;
