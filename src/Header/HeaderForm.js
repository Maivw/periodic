import React from "react";
import "./HeaderForm.css";
import Grid from "@material-ui/core/Grid";

function HeaderForm({ title, onCloseScreen }) {
	return (
		<Grid container item className="headerForm">
			<Grid item xs={8} sm={9} md={10} lg={10} className="headerForm__title">
				Resource Groups <span>{title}</span>
			</Grid>
			<Grid item xs={4} sm={3} md={2} lg={2} className="headerForm__buttons">
				<button
					className="headerForm__buttonCancel"
					onClick={() => onCloseScreen(false)}
				>
					CANCEL
				</button>
				<button className="headerForm__buttonSave">SAVE</button>
			</Grid>
		</Grid>
	);
}

export default HeaderForm;
