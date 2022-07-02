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
import MovingCloud from "./Components/MovingClouds/MovingCloud";
import Faculties from "./Components/Experience/Faculties/Faculties";
import AboutUs from "./Components/Experience/AboutUs/AboutUs";
import Event from "./Components/Experience/Events/Event";
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
          <Route path="/MovingCloud" exact element={<MovingCloud />} />
          <Route path="/Faculties" exact element={<Faculties />} />
          <Route path="/AboutUs" exact element={<AboutUs />} />
          <Route path="/Event" exact element={<Event />} />

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
