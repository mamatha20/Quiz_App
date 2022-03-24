import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
export function Home(props) {
	const user = useContext(UserContext);

	const [fName, setFName] = useState("");
	const [lastName, setLastName] = useState("");
	const [isChecked, setIsChecked] = useState(false);
	const [disabled, setIsDisabled] = useState(true);
	const navigate = useNavigate();

	const buttonClickHandler = () => {
		//user = fName + " " + lastName;
		props.handleUser(fName + " " + lastName);
		navigate("/quiz");
	};

	const toggleButton = () => {
		console.log("toogle button invoked");
		if (fName.length > 0 && lastName.length > 0 && isChecked) {
			setIsDisabled(false);
		} else {
			setIsDisabled(true);
		}
	};
	return (
		<div
			style={{
				width: "100vw",
				height: "100vh",
				margin: "auto",
				padding: "10px",
				textAlign: "center",
				display: "block",
			}}
		>
			<h2>Home Page</h2>
			<div style={{ display: "flex", justifyContent: "center" }}>
				<div
					style={{
						display: "flex",
						width: "450px",
						justifyContent: "center",
						flexDirection: "column",
						rowGap: "0.5rem",
					}}
				>
					<FormGroup>
						<TextField
							id="outlined-basic"
							label="First Name"
							variant="outlined"
							value={fName}
							onChange={(ev) => {
								console.log("current fName", fName);
								setFName(ev.target.value);
							}}
							onBlur={toggleButton}
						/>
					</FormGroup>
					<FormGroup>
						<TextField
							id="outlined-basic"
							label="Last Name"
							variant="outlined"
							value={lastName}
							onChange={(ev) => {
								setLastName(ev.target.value);
							}}
							onBlur={toggleButton}
						/>
					</FormGroup>

					<FormGroup>
						<FormControlLabel
							control={
								<Checkbox
									value={isChecked}
									onChange={(ev) => {
										setIsChecked(ev.target.checked);
										console.log("current Checkbox", isChecked);
									}}
									onBlur={toggleButton}
								/>
							}
							label="Are you ready to take the Quiz?"
						/>
					</FormGroup>
					<Button
						variant="contained"
						disabled={disabled}
						onClick={buttonClickHandler}
					>
						Start Quiz
					</Button>
				</div>
			</div>
		</div>
	);
}
