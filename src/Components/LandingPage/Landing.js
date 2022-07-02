import React, { useState } from "react";
import HeaderBox from "../Header-box/HeaderBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import SideMenu from "../SidebarNav/SideBarNav";
import LogIn from "../LogIn/LogIn";
import MovingCloud from "../MovingClouds/MovingCloud";
import {
  faBars,
  faXmark,
  faArrowRightLong,
  faArrowLeftLong,
} from "@fortawesome/free-solid-svg-icons";
import "./Landing.css";
const Landing = () => {
  const [isActive, setisActive] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const toggleClass = () => {
    setisActive(!isActive);
  };
  // const diableClick = () => {

  //   setIsDisabled(!isDisabled);
  // };

  return (
    <section className="Landing">
      <Link to="/">
        <HeaderBox />
        <LogIn />
      </Link>
      <MovingCloud />
      <div className="landing__body">
        <div
          className={
            isActive
              ? "landing__bodyItem left-div none  "
              : "landing__bodyItem left-div   "
          }
        >
          <div className="landing__bodyHeader left-div__heading">
            <h1>Customize my experience</h1>
          </div>

          <div className="landing__body-left-div__movingImage">
            <div className="landing__body-left-div__movingImage  Image">
              <img
                className="LandingImage"
                src="\assets\customise-assets.63e65c7ddd53ca1760fd - Copy.png"
                alt=""
                srcset=""
              />
            </div>
          </div>
          <div onClick={toggleClass} className="right-arrow"></div>
          <div onClick={toggleClass} className="left-arrow"></div>
          <div className="landing__bodyText left-div__text-box">
            <h4>
              We can customise your experience to show content that fits your
              needs. <br />
              First we’ll ask you a few questions to get to know more about you.
            </h4>
          </div>
          <Link to="/Experience">
            <div className="landing__button landing__body-left-div__button">
              <button>
                <span>Tailor my experience</span>
              </button>
            </div>
          </Link>
        </div>
        <div
          className={
            isActive
              ? "landing__bodyItem right-div "
              : "landing__bodyItem right-div none"
          }
        >
          <div className="landing__bodyHeader right-div__heading">
            <h1>I'd Like to look around</h1>
          </div>
          <div className="landing__body-right-div__movingImage">
            <div className="landing__body-right-div__movingImage  Image">
              <img
                className="LandingImage2"
                src="\assets\look-around-assets.93a2320c4e62fb77e764.png"
                alt=""
                srcset=""
              />
            </div>
          </div>
          <div onClick={toggleClass} className="right-arrow"></div>
          <div onClick={toggleClass} className="left-arrow"></div>

          <div className="landing__bodyText right-div__text-box">
            <h4>
              Dive right in and take a look around. You can always customise
              your <br /> experience later.
            </h4>
          </div>
          <div className="landing__button landing__body-right-div__button">
            <button>
              <span>I'd just like to look</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
