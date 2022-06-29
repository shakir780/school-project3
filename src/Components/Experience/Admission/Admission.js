import React from "react";
import "./Admission.css";
import HeaderBox from "../../Header-box/HeaderBox";
import { Link } from "react-router-dom";
const Admission = () => {
  return (
    <div className="Admission">
      <Link to="/">
        <HeaderBox />
      </Link>
      <div className="Admission__container">
        <div className="Admission__header">
          <h1 id="Admission__title" className="text-center">
            Applicants
          </h1>
          <form id="survey-form">
            <div class="form-group">
              <label id="ID" for="Id">
                ID
              </label>
              <input
                type="text"
                name="name"
                id="name"
                class="form-control"
                placeholder="Enter your ID"
                required
              />
            </div>
            <div class="form-group">
              <label id="namr-arr" for="email">
                name arr
              </label>
              <input
                type="name"
                name="name"
                id="name"
                class="form-control"
                placeholder="Enter your name in arabic"
                required
              />
            </div>
            <div class="form-group">
              <label id="namr-eng" for="email">
                name eng
              </label>
              <input
                type="name"
                name="name"
                id="name"
                class="form-control"
                placeholder="Enter your name in English"
                required
              />
            </div>

            <div class="form-group">
              <label id="kind" for="kind">
                Kind
              </label>
              <input
                type="name"
                name="name"
                id="name"
                class="form-control"
                placeholder="Enter your kind"
                required
              />
            </div>
            <div class="form-group">
              <label id="school_typeId" for="School-type">
                School Type
              </label>
              <input
                type="name"
                name="name"
                id="name"
                class="form-control"
                placeholder="Enter your School type"
                required
              />
            </div>
            <div class="form-group">
              <label id="school_yearId" for="School-year">
                School year
              </label>
              <input
                type="date"
                name="name"
                id="name"
                class="form-control"
                placeholder="Enter your School type"
                required
              />
            </div>
            <div class="form-group">
              <label id="school_markId" for="School-Mark">
                School Mark
              </label>
              <input
                type="number"
                name="name"
                id="name"
                class="form-control"
                placeholder="Enter your School type"
                required
              />
            </div>
            <div class="form-group">
              <label id="Faculty" for="Faculty">
                Faculty
              </label>
              <input
                type="name"
                name="name"
                id="name"
                class="form-control"
                placeholder="Enter your faculty"
                required
              />
            </div>
            <div class="form-group">
              <label id="Email" for="email">
                Email
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
              <label id="phone-number" for="phone_number">
                Mobile number
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
              <label id="phone-number" for="phone_number">
                Applicant image
              </label>
              <input
                type="file"
                id="img"
                name="img"
                accept="image"
                class="form-control"
                required
              />
            </div>
            <div class="form-group">
              <label id="phone-number" for="phone_number">
                School certificate image
              </label>
              <input
                type="file"
                id="img"
                name="img"
                accept="image"
                class="form-control"
                required
              />
            </div>
            <div class="form-group">
              <label id="phone-number" for="phone_number">
                Birth certificate image
              </label>
              <input
                type="file"
                id="img"
                name="img"
                accept="image"
                class="form-control"
                required
              />
            </div>

            <div class="form-group">
              <button type="submit" id="submit" class="submit-button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admission;
