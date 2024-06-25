import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Home from "./pages/Home.jsx";
import Consultants from "./pages/Consultants.jsx";
import ConsultantDetail from "./pages/ConsultantDetail.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/consultants" element={<Consultants />} />
        <Route exact path="/consultant/:name" element={<ConsultantDetail />} />
      </Routes>
    </Router>
  );
}

export default App;