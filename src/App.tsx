import Navbar from "@components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CoursePage from "./pages/CoursePage";
import RegisterPage from "./pages/RegisterPage";

export default function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<RegisterPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/courses" element={<CoursePage />} />
				<Route path="*" element={<h1>Not Found</h1>} />
			</Routes>
		</BrowserRouter>
	);
}
