import React from "react";
import "./HostelReg.css";
import HeaderBox from "../../Header-box/HeaderBox";
import LogIn from "../../LogIn/LogIn";
import { Link } from "react-router-dom";
const HostelReg = () => {
  return (
    <>
      <div className="Hostel">
        <Link to="/">
          <HeaderBox />
        </Link>

        <div className="Hostel__container">
          <div className="Hostel__header">
            <h1 id="Hostel__title" className="text-center">
              ACU Hostel Registration
            </h1>
          </div>
          <form id="survey-form">
            <div class="form-group">
              <label id="name-label" for="name">
                Student Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                class="form-control"
                placeholder="Enter your name"
                required
              />
            </div>
            <div class="form-group">
              <label id="ID" for="email">
                Student ID
              </label>
              <input
                type="email"
                name="email"
                id="email"
                class="form-control"
                placeholder="Enter your Email"
                required
              />
            </div>

            <div class="form-group">
              <label id="phone-number" for="phone_number">
                Phone Number
              </label>
              <input
                type="email"
                name="email"
                id="email"
                class="form-control"
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div class="form-group">
              <label>Room type</label>
              <div className="select" width="100px">
              <select>
                <option value="1">single</option>
                <option value="2">Double</option>
              </select>
              </div>
           
            </div>
            <div class="form-group">
              <label>Gender</label>
              <div className="select" width="100px">
              <select>
                <option value="1">Male</option>
                <option value="2">FeMale</option>
              </select>
              </div>
           
            </div>
            <div class="form-group">
              <button type="submit" id="submit" class="submit-button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default HostelReg;
