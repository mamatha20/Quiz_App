import { useEffect, useState } from "react";
import { QuizItem } from "./QuizItem";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
const questionArray = [
	{
		title: "html stands for ",
		options: [
			"Hyper Text Transfer Markup Language",
			"Hyper Transformation Markup Language",
			"Hyper Text Markup Language",
			"Hyper Text Makeup Language",
		],
		correct: 2,
	},
	{
		title: "SCSS requires Preprocessor to compile scss code to css ",
		options: ["true", "false"],
		correct: 0,
	},
	{
		title: "How many Heading Tags are present in HTML ",
		options: ["4", "5", "7", "6"],
		correct: 3,
	},
	{
		title: "ReactJS use which of the following to define markup",
		options: ["Markup", "JSX", "Javascript", "None"],
		correct: 1,
	},
];
export function Quiz() {
	let navigate = useNavigate();
	const questions = questionArray;
	const [showPrev, setShowPrev] = useState(false);
	const [showNext, setShowNext] = useState(true);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [score, setScore] = useState(0);

	useEffect(() => {
		if (currentQuestionIndex + 1 === questions.length) {
			setShowNext(false);
		} else {
			setShowNext(true);
		}
		if (currentQuestionIndex >= 1) {
			setShowPrev(true);
		} else {
			setShowPrev(false);
		}
	}, [currentQuestionIndex, questions.length]);
	const onOptionSelected = (option) => {
		if (option === questions[currentQuestionIndex].correct) {
			setScore((prevScore) => {
				return prevScore + 1;
			});
		}
	};

	const handleNext = () => {
		setCurrentQuestionIndex((prevState) => {
			return prevState + 1;
		});
	};

	const handlePrevious = () => {
		setCurrentQuestionIndex((prevState) => {
			return prevState - 1;
		});
	};

	const submit = () => {
		navigate("/score", {
			state: { passingScore: 50, score: (score / questions.length) * 100 },
		});
	};
	return (
		<div
			style={{
				width: "80%",
				height: "75%",
				justifyContent: "center",
				textAlign: "center",
				margin: "20px",
			}}
		>
			<QuizItem
				quiz={questions[currentQuestionIndex]}
				srNo={currentQuestionIndex + 1}
				onNextClicked={handleNext}
				onPrevClicked={handlePrevious}
				onOptionSelected={onOptionSelected}
			/>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<Button
					variant="contained"
					component="span"
					onClick={() => handlePrevious()}
					disabled={!showPrev}
				>
					&#60; &#60; Prev
				</Button>
				{currentQuestionIndex + 1 !== questions.length ? (
					<Button
						variant="contained"
						component="span"
						onClick={() => handleNext()}
						disabled={!showNext}
					>
						Next &#62; &#62;
					</Button>
				) : (
					<Button variant="contained" component="span" onClick={() => submit()}>
						Submit
					</Button>
				)}
			</div>
		</div>
	);
}
