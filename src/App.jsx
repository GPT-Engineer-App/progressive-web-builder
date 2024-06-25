import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Home from "./pages/Home.jsx";
import Consultants from "./pages/Consultants.jsx";
import ConsultantDetail from "./pages/ConsultantDetail.jsx";
import Navbar from "./components/Navbar.jsx";
import Login from "./pages/Login.jsx";
import UserDetails from "./pages/UserDetails.jsx";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  const handleLogin = (user) => {
    setUser(user);
  };

  const handleUserDetailsSubmit = (details) => {
    setUserDetails(details);
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  if (!userDetails) {
    return <UserDetails onSubmit={handleUserDetailsSubmit} />;
  }

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