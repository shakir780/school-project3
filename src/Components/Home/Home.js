import React from "react";
import "./Home.css";
import HeaderBox from "../Header-box/HeaderBox";
import SideMenu from "../SidebarNav/SideBarNav";
import LogIn from "../LogIn/LogIn";
import MovingCloud from "../MovingClouds/MovingCloud";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section className="home">
      <HeaderBox />
      <LogIn />
      <MovingCloud />

      <div className="home__text-box">
        <h1>
          Welcome To Acu <br /> For a Better Future
        </h1>
      </div>
      <div className="home__text-box--sub">
        <h4>
          Whether you're seeking a home away from home, the right community,{" "}
          <br /> or the opportunity to get ahead while still being yourself,
          discover why <br />
          studying with us is the right choice for you
        </h4>
      </div>
      <Link to="/Landing">
        <div className="home__button">
          <button>
            <span>Let's go</span>
          </button>
        </div>
      </Link>
    </section>
  );
};

export default Home;
