import React, { useState } from "react";
import "./EditResourcesModal.css";

const resourcesRemove = ["Beach Ball", "Resource user", "Beach Hairstylist"];
function EditResourcesModal({ modalVisible }) {
	const [open, setOpen] = useState(true);
	const [resources, setResources] = useState([
		"Beach Ball",
		"Resource user",
		"Beach Hairstylist",
	]);

	const removeResource = ({ name }) => {
		const rest = resourcesRemove.filter((item) => item !== name);
		setResources(rest);
		console.log("eee");
	};

	return (
		<div className="editModal">
			{resources.map((data) => (
				<div className="editModal__item">
					<div>{data.name}</div>
					<button
						className="editModal__removeButton"
						onClick={() => removeResource(data)}
					>
						X
					</button>
				</div>
			))}
		</div>
	);
}

export default EditResourcesModal;

{
	/* <Dialog open={open} onClose={handleClose}>
					<DialogContent>
						<DialogContentText id="alert-dialog-description">
							{data.name}
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={removeResource} color="primary">
							Disagree
						</Button>
					</DialogActions>
				</Dialog> */
}
