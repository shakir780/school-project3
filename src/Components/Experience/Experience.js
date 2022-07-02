import React from "react";
import "./Experience.css";
import { FaAward, FaUniversity } from "react-icons/fa";
import { AiOutlineFormatPainter, AiOutlineForm } from "react-icons/ai";
import { MdEmojiEvents, MdContactSupport } from "react-icons/md";
import { GiHouse } from "react-icons/gi";
import { SiInformatica } from "react-icons/si";
import { Link } from "react-router-dom";
import HeaderBox from "../Header-box/HeaderBox";
import SideMenu from "../SidebarNav/SideBarNav";
import MovingCloud from "../MovingClouds/MovingCloud";
const Experience = () => {
  return (
    <>
      <section id="experience">
        <Link to="/">
          <HeaderBox />
        </Link>

        <div className="experience__container">
          <div className="experience_info">
            <div className="experiecne__img">
              <img src="\assets\nn.jpg" alt="" srcset="" />
            </div>
          </div>
          <div className="experience__content">
            <div className="experience__minicard">
              <h1>
                Helping each child find and follow their best learning path.
              </h1>
            </div>

            <div className="experience__cards">
              <article className="experience__card card1">
                <FaUniversity className="experice__icon" />
                <h5>Faculties</h5>
              </article>
              <Link to="/Admission">
                <article className="experience__card card2">
                  <AiOutlineForm className="experice__icon" />
                  <h5>Admission</h5>
                </article>
              </Link>
              <article className="experience__card card3">
                <MdEmojiEvents className="experice__icon" />
                <h5>Events</h5>
              </article>
              <Link to="/Hostelreg">
                <article className="experience__card card4">
                  <GiHouse className="experice__icon" />
                  <h5>Hostel Registration</h5>
                </article>
              </Link>
              <article className="experience__card card5">
                <SiInformatica className="experice__icon" />
                <h5>About ACU</h5>
              </article>
              <article className="experience__card card6">
                <MdContactSupport className="experice__icon" />
                <h5>Contact US</h5>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
