import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, trackingId, date, status) {
    return { name, trackingId, date, status };
  }
  
  const rows = [
    createData("Mohamed shakir", 18908424, "2 March 2022", "Approved"),
    createData("Yahia khaled ", 18908424, "2 March 2022", "Pending"),
    createData("idirs alba", 18908424, "2 March 2022", "Approved"),
    createData("your daddy", 18908421, "2 March 2022", "Delivered"),
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
  
  export default function StudentTable() {
    return (
        <div className="Table">
         <a   className=""
     
        
     >Student</a>
          <TableContainer
            component={Paper}
            style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  
                  <TableCell id='NameID' align="left">Name</TableCell>
                  <TableCell id='ID' align="left">ID</TableCell>
                  <TableCell Id='KindID' align="left">Kind</TableCell>
                  <TableCell id='NationalityID' align="left">Nationality</TableCell>
                  <TableCell id='Birth_CountryID' align="left">Birth_Country</TableCell>
                  <TableCell  id='DOBID' align="left">DOB</TableCell>
                  <TableCell id='School_typeID' align="left">School_type</TableCell>
                  <TableCell  id='School_yearID' align="left">School_year</TableCell>
                  <TableCell id='School_markID' align="left">School_mark</TableCell>
                  <TableCell id='FacultyID' align="left">Faculty</TableCell>
                  <TableCell  id='EmailID' align="left">Email</TableCell>
                  <TableCell  id='Applicant_image_pathID' align="left">Applicant_image_path</TableCell>
                  <TableCell id='School_cert_imageID' align="left">School_cert_image</TableCell>
                  <TableCell id='certi_pdf_pathID' align="left">certi_pdf_path</TableCell>
                  <TableCell id='certi_pdf_pathID' align="left">Accept/Reject</TableCell>
                  <TableCell id='statusID' align="left">status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody style={{ color: "white" }}>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.trackingId}</TableCell>
                    <TableCell align="left">{row.date}</TableCell>
                    <TableCell align="left">
                     Egyptian
                    </TableCell>
                    <TableCell align="left" className="Details">EGY</TableCell>
                    <TableCell align="left" className="Details">2000</TableCell>
                    <TableCell align="left" className="Details">public</TableCell>
                    <TableCell align="left" className="Details">2000</TableCell>
                    <TableCell align="left" className="Details">50</TableCell>
                    <TableCell align="left" className="Details">Art</TableCell>
                    <TableCell align="left" className="Details">Your@ymail.com</TableCell>
                    <TableCell align="left" className="Details">Images</TableCell>
                    <TableCell align="left" className="Details">Images</TableCell>
                    <TableCell align="left" className="Details">PDFS</TableCell>
                    <TableCell align="left">
                      <div className="acceptOrReject">
                      <a href="#" class="accept">ACCEPT <span class="fa fa-check"></span></a>
                     <a href="#" class="deny">DENY <span class="fa fa-close"></span></a>
                      </div>
                   
                    </TableCell>
                   
                      <TableCell align="left">
                      <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
    );
  }

