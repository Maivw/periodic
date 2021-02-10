import React from "react";
import "./HeaderForm.css";

function HeaderForm({ title, onCloseScreen }) {
	return (
		<div className="headerForm">
			<div className="headerForm__title">
				Resource Groups <span>{title}</span>
			</div>
			<div className="headerForm__buttons">
				<button
					className="headerForm__buttonCancel"
					onClick={() => onCloseScreen(false)}
				>
					CANCEL
				</button>
				<button className="headerForm__buttonSave">SAVE</button>
			</div>
		</div>
	);
}

export default HeaderForm;
