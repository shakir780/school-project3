import React from "react";
import Home from "./Components/Home/Home";
import Landing from "./Components/LandingPage/Landing";
import Admission from "./Components/Experience/Admission/Admission";
import Experience from "./Components/Experience/Experience";
import Dashboard from "./Components/Dashaboard/Dashboard";
import HostelReg from "./Components/Experience/HostelRegistration/HostelReg";
import AdminDashboard from "./Components/Dashaboard/AdminDashboard";
import SingleDashboard from "./Components/Dashaboard/SingleDashboard";
import DoubleDashboard from "./Components/Dashaboard/DoubleHostelDashboard";
import StudentDashboard from "./Components/Dashaboard/StudentDashboard";
import AdminLogin from "./Components/Dashaboard/AdminLogin/AdminLogin";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/landing" exact element={<Landing />} />
          <Route path="/Experience" exact element={<Experience />} />
          <Route path="/Dashboard" exact element={<Dashboard />} />
          <Route path="/HostelReg" exact element={<HostelReg />} />
          <Route path="/Admission" exact element={<Admission />} />
          <Route path="/Admins" exact element={<AdminDashboard />} />
          <Route path="/SingleDashboard" exact element={<SingleDashboard />} />
          <Route path="/DoubleDashboard" exact element={<DoubleDashboard />} />
          <Route path="/AdminLogin" exact element={<AdminLogin />} />

          <Route
            path="/StudentDashboard"
            exact
            element={<StudentDashboard />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
