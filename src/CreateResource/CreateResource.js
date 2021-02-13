import React, { useState } from "react";
import providerData from "../dataFiles/provider-data.json";
import resourcesData from "../dataFiles/resources-data.json";
import "./CreateResource.css";
import TextField from "@material-ui/core/TextField";
import HeaderForm from "../Header/HeaderForm";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import AddResources from "../AddResource/AddResources";
import Avatar from "@material-ui/core/Avatar";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		width: "100%",
		fontSize: "1rem",
	},
	input: {
		margin: theme.spacing(1),
		width: "100%",
	},
	menuItem: {
		color: "#9B9B9B",
	},
}));

function CreateResource({ showModal, title = "Create" }) {
	const classes = useStyles();
	const [visibleCreateScreen, setVisibleCreateScreen] = useState(true);
	const [resourceName, setResourceName] = useState("");
	const [provider, setProvider] = useState("");
	const [isOpenSelect, setIsOpenSelect] = useState(false);
	const [listSelected, setListSelected] = useState([]);
	const resourceFiltered = resourcesData
		.filter((resource) => resource.associated_providers[0] === provider)
		.map((ele) => ({ ...ele, label: ele.name, value: ele.id }));
	const onAddSelect = (listData) => {
		setIsOpenSelect(false);
		setListSelected(listData);
	};
	const onRemoveItemFromResource = (item) => {
		setListSelected((prev) => prev.filter((ele) => ele.id !== item.id));
	};

	return (
		<>
			{showModal && visibleCreateScreen ? (
				<div className="create">
					<HeaderForm
						title={title}
						onCloseScreen={() => setVisibleCreateScreen(false)}
					/>
					<div className="create__body">
						<div className="create__sidebar">
							<div className="create__sidebar-item">
								<span>Basic Info</span>
							</div>
						</div>
						<div className="create__form">
							<div className="create__title">Basic Info</div>
							<Grid container>
								<Grid container item>
									<TextField
										required
										label="Resource name"
										className={classes.input}
										value={resourceName}
										onChange={(e) => setResourceName(e.target.value)}
									/>
								</Grid>
								<Grid container item>
									<FormControl className={classes.formControl}>
										<InputLabel>Provider *</InputLabel>
										<Select
											value={provider}
											onChange={(e) => setProvider(e.target.value)}
											style={{ width: "100%" }}
										>
											{providerData.map((e) => (
												<MenuItem key={e.id} value={e.id}>
													<span className={classes.menuItem}> {e.name}</span>
												</MenuItem>
											))}
										</Select>
									</FormControl>
								</Grid>
								<Grid container item>
									<div
										onClick={(e) => setIsOpenSelect(true)}
										className={`${
											provider
												? "create__button-active"
												: "create__button-disable"
										}`}
									>
										<div
											className={`${
												provider
													? "create__buttonSign-active"
													: "create__buttonSign-disable"
											}`}
										></div>
										ADD RESOURCE
									</div>
								</Grid>
								{provider && isOpenSelect ? (
									<Grid container item>
										<AddResources
											optionsList={resourceFiltered}
											onAddSelect={onAddSelect}
										/>
									</Grid>
								) : null}

								<Grid container item className="selectedResources">
									{listSelected.map((item) => (
										<div key={item.id} className="selectedResource">
											<div
												className="selectedResource__removeSign"
												onClick={() => onRemoveItemFromResource(item)}
											>
												<CloseIcon className="selectedResource__removeIcon" />
											</div>

											<div className="selectedResource__detail">
												<Avatar
													src=""
													className="selectedResource__detail-avatar"
												>
													{item?.name[0]}
												</Avatar>
												<div className="selectedResource__detail-text">
													<div>{item.name}</div>
													<span>required</span>
												</div>
											</div>
										</div>
									))}
								</Grid>
							</Grid>
						</div>
					</div>
				</div>
			) : null}
		</>
	);
}

export default CreateResource;
