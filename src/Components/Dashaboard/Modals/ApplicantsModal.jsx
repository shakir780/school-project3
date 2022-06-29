import React from 'react'
import './ApplicantsModal.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
const ApplicantsModal = ({ setOpenModal}) => {
  return (
    <div className="applicants__modal">
    <div class="student-profile py-4">
    <div class="applicants__modalcontainer">
    <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
      <div class="applicants__modalcontainer__row">
        <div class="col-lg-4">
          <div class="card shadow-sm">
            <div class="card-header bg-transparent text-center">
              <img class="profile_img" src="https://source.unsplash.com/600x300/?student" alt="student dp"/>
              <h3>Ishmam Ahasan Samin</h3>
            </div>
            
          </div>
        </div>
        <div class="col-lg-8">
          <div class="card shadow-sm">
            <div class="Applicants_modal-header">
              <h3 class="mb-0"><i class="far fa-clone pr-1"></i>General Information</h3>
            </div>
            <div class="card-body pt-0">
              <table class="applicant_modal-table">
                <tr>
                  <div className="tinfo">
                  <th width="30%">ID</th>
                  <td width="2%">:</td>
                  <td>125</td>
                  </div>
                
                </tr>
                <tr>
                <div className="tinfo">
                <th width="30%">Name arr</th>
                  <td width="2%">:</td>
                  <td>ىىىى</td>
                  </div>
                </tr>
                <tr>
                <div className="tinfo">
                <th width="30%">Name eng</th>
                  <td width="2%">:</td>
                  <td>shaks</td>
                  </div>
                </tr>
                <tr>
                <div className="tinfo">
                <th width="30%">kind</th>
                  <td width="2%">:</td>
                  <td>Group</td>
                  </div>
                </tr>
                <tr>
                <div className="tinfo">
                <th width="30%">nationality</th>
                  <td width="2%">:</td>
                  <td>wakanda</td>
                  </div>
                </tr>
                <tr>
                <div className="tinfo">
                <th width="30%">birth country</th>
                  <td width="2%">:</td>
                  <td>zulu</td>
                  </div>
                </tr>
                <tr>
                <div className="tinfo">
                <th width="30%">DOB</th>
                  <td width="2%">:</td>
                  <td>2000/1/2</td>
                  </div>
                </tr>
                <tr>
                <div className="tinfo">
                <th width="30%">School Type</th>
                  <td width="2%">:</td>
                  <td>Public</td>
                  </div>
                </tr>
                <tr>
                <div className="tinfo">
                <th width="30%">School year</th>
                  <td width="2%">:</td>
                  <td>2000</td>
                  </div>
                </tr>
                <tr>
                <div className="tinfo">
                <th width="30%">School Mark</th>
                  <td width="2%">:</td>
                  <td>97%</td>
                  </div>
                </tr>
                <tr>
                <div className="tinfo">
                <th width="30%">Faculty</th>
                  <td width="2%">:</td>
                  <td>Cs</td>
                  </div>
                </tr>
                <tr>
                <div className="tinfo">
                <th width="30%">Email</th>
                  <td width="2%">:</td>
                  <td>yourfada@ymail.com</td>
                  </div>
                </tr>
                <tr>
                <div className="tinfo">
                <th width="30%">Mobile Number</th>
                  <td width="2%">:</td>
                  <td>012346678</td>
                  </div>
                </tr>
            
              </table>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default ApplicantsModal