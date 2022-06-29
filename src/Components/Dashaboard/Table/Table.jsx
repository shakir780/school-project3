import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";
import ApplicantsModal from "../Modals/ApplicantsModal";

function createData(name, trackingId, date, status) {
    return { name, trackingId, date, status };
  }

  const rows = [
    createData("Mohamed shakir", 18908424, "2 March 2022", "Approved"),
    createData("Yahia khaled ", 18908424, "2 March 2022", "Pending"),
    createData("idirs alba", 18908424, "2 March 2022", "Approved"),
    createData("your daddy", 18908421, "2 March 2022", "Approved"),
  ];

  const makeStyle=(status)=>{
    if(status === 'Approved')
    {
      return {
        background: 'rgb(145 254 159 / 47%)',
        color: 'green',
      }
    }
    else if(status === 'Pending')
    {
      return{
        background: '#ffadad8f',
        color: 'red',
      }
    }
    else{
      return{
        background: '#59bfff',
        color: 'white',
      }
    }
  }
  export default function BasicTable() {
    const [modalOpen, setModalOpen] = React.useState(false);
    return (
        <div className="Table">
        <h3>Applicants </h3>
          <TableContainer
            component={Paper}
            style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow classname='tablerow'>
                <TableCell id='Applicants_head_ApplicantName' align="left">Name</TableCell>
                  <TableCell id='Applicants_head_ApplicantId' align="left">ID</TableCell>
              
                  <TableCell id='Applicants_head_NationalityId' align="left">Nationality</TableCell>
                  <TableCell id='Applicants_head_DetailsId' align="left">Details</TableCell>
                  <TableCell id='Applicants_head_Status' align="left">Status</TableCell>
                  <TableCell id='Applicants_head_Accept/Reject' align="left">Accept/Reject</TableCell>
                </TableRow>
              </TableHead>
              <TableBody style={{ color: "white" }}>
              
                  <TableRow
                  
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell id='Applicants_Body_ApplicantName' align="left">Name</TableCell>
                  <TableCell id='Applicants_Body_ApplicantId' align="left">ID</TableCell>
              
                  <TableCell id='Applicants_Body_NationalityId' align="left">Nationality</TableCell>
                  <TableCell id='Applicants_Body_Status' align="left" className="Details"   onClick={() => {
            setModalOpen(true);
          }}>Details</TableCell>
                  <TableCell id='Applicants_Body__Status' align="left">Status</TableCell>
                    
                
                    <TableCell id='Applicants_Body_Accept/Reject' align="left">
                      <div className="acceptOrReject">
                      <a href="#" class="accept">Accept <span class="fa fa-check"></span></a>
                     <a href="#" class="deny">Reject<span class="fa fa-close"></span></a>
                      </div>
                   
                    </TableCell>
                  </TableRow>
               
              </TableBody>
            </Table>
          </TableContainer>
          {modalOpen && <ApplicantsModal setOpenModal={setModalOpen} />}
        </div>
    );
  }