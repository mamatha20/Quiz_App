import "./App.css";
import Button from "@mui/material/Button";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home/Home";
import { Score } from "./Score/Score";
import { Quiz } from "./Quiz/Quiz";
import { useState, createContext } from "react";

export const UserContext = createContext();

function App() {
	const [user, setUser] = useState();

	const handleUser = (val) => {
		setUser(val);
	};
	return (
		<div className="app">
			<UserContext.Provider value={user}>
				<BrowserRouter>
					<Routes>
						<Route path="" element={<Home handleUser={handleUser} />} />
						<Route path="/quiz" element={<Quiz />} />
						<Route path="/score" element={<Score />} />
					</Routes>
				</BrowserRouter>
			</UserContext.Provider>
		</div>
	);
}

export default App;
