import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Dialog from "@material-ui/core/Dialog";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import providerData from "./provider-data.json";
import "./AddResourcesModal.css";

const GreenCheckbox = withStyles({
	root: {
		color: "#67DCBA",
		"&$checked": {
			color: "#4BE8BC",
		},
	},
	checked: {},
})((props) => <Checkbox color="default" {...props} />);

const addResourcesList = [
	"Mulch Truck 1",
	"driver 1",
	"Nathan Furr",
	"Resource user",
	"Beach Hairstylist",
];

function AddResourcesModal({ modalVisible, onCloseModal }) {
	const [state, setState] = useState({
		checkedValue: true,
	});

	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};
	const handleClose = (value) => {
		onCloseModal(value);
	};
	const ids = providerData.map((data) => data["id"]);
	return (
		<Dialog aria-labelledby="simple-dialog-title" open={modalVisible}>
			<TextField
				id="standard-basic"
				label="search for a resource"
				type="search"
			/>
			<List className="addResource__list">
				{addResourcesList.map((data, index) => (
					<ListItem button key={index}>
						<FormControlLabel
							control={
								<GreenCheckbox
									checked={state.checkedG}
									onChange={handleChange}
									name="checkedValue"
									// checked={ids.indexOf(data.id) !== -1 ? checkedValue : false}
								/>
							}
						/>
						<ListItemText primary={data} />
					</ListItem>
				))}
				<button className="addResource__button" onClick={handleClose}>
					ADD SELECTED
				</button>
			</List>
		</Dialog>
	);
}

export default AddResourcesModal;
