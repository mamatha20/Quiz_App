import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import { useState } from "react";
export function QuizItem(props) {
	return (
		<div>
			<div>
				<h4>
					{props.srNo}) {props.quiz.title}
				</h4>
			</div>
			<div>
				<FormControl>
					<RadioGroup aria-labelledby="demo-radio-buttons-group-label">
						{props.quiz.options.map((ele, idx) => {
							return (
								<FormControlLabel
									key={idx}
									value={idx}
									control={
										<Radio
											onChange={() => {
												props.onOptionSelected(idx);
											}}
										/>
									}
									label={ele}
								/>
							);
						})}
					</RadioGroup>
				</FormControl>
			</div>
		</div>
	);
}
