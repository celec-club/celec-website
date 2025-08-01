import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home/page";
import JoinPage from "./Pages/Join-Us/page";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/join-us" element={<JoinPage />} />
      </Routes>
    </Router>
  );
}
