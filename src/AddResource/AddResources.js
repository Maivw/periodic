import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import "./AddResources.css";

const GreenCheckbox = withStyles({
	root: {
		color: "#67DCBA",
		"&$checked": {
			color: "#4BE8BC",
		},
	},
	checked: {},
})((props) => <Checkbox color="default" {...props} />);

function AddResources({ onAddSelect, optionsList }) {
	const [search, setSearch] = useState();
	const [listSelected, setListSelected] = useState([]);
	const findList = search
		? optionsList.filter((item) =>
				item.label.toLowerCase()?.includes(search.toLowerCase())
		  )
		: optionsList;
	const onSelectItem = (item) => () => {
		const isExist = listSelected.find((e) => e.id === item.id);
		setListSelected((prev) =>
			isExist ? listSelected.filter((e) => e.id !== item.id) : [...prev, item]
		);
	};

	return (
		<div className="addResource__wrapper">
			<TextField
				id="standard-basic"
				label="search for a resource"
				type="search"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				className="addResource__input"
			/>
			<List className="addResource__list">
				{findList.map((data, index) => (
					<ListItem
						button
						key={index}
						onClick={onSelectItem(data)}
						className="addResource__item"
					>
						<FormControlLabel
							control={
								<GreenCheckbox
									checked={listSelected.some((e) => e.id === data.id)}
									name="checkedValue"
								/>
							}
						/>
						<div className="addResource__itemName">{data.name}</div>
					</ListItem>
				))}
				<button
					className="addResource__button"
					onClick={() => onAddSelect(listSelected)}
				>
					ADD SELECTED
				</button>
			</List>
		</div>
	);
}

export default AddResources;
