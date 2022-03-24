import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../App";

export function Score() {
	const location = useLocation();
	const user = useContext(UserContext);

	return (
		<div style={{ display: "block", textAlign: "center", padding: "2rem" }}>
			{location.state.score >= location.state.passingScore ? (
				<h2 style={{ color: "#009b8d" }}>
					Congratulations {user}!!! You have scored {location.state.score}% and
					have passed the Certification
				</h2>
			) : (
				<h2 style={{ color: "#f44336" }}>
					Oh No {user}!!! You have scored {location.state.score}%, but have
					failed in this attempt.Please try again
				</h2>
			)}
		</div>
	);
}
