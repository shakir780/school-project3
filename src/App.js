import React from "react";
import Home from "./Components/Home/Home";
import Landing from "./Components/LandingPage/Landing";

import Experience from "./Components/Experience/Experience";
import Dashboard from "./Components/Dashaboard/Dashboard";
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
        </Routes>
      </Router>
    </div>
  );
};

export default App;
