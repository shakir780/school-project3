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
                  
                  <TableCell id='StudentTable_head_NameID' align="left">Name</TableCell>
                  <TableCell id='StudentTable_head_ID' align="left">ID</TableCell>
                  <TableCell Id='StudentTable_head_KindID' align="left">Kind</TableCell>
                  <TableCell id='StudentTable_head_NationalityID' align="left">Nationality</TableCell>
                  <TableCell id='StudentTable_head_Birth_CountryID' align="left">Birth_Country</TableCell>
                  <TableCell  id='StudentTable_head_DOBID' align="left">DOB</TableCell>
                  <TableCell id='StudentTable_head_School_typeID' align="left">School_type</TableCell>
                  <TableCell  id='StudentTable_head_School_yearID' align="left">School_year</TableCell>
                  <TableCell id='StudentTable_head_School_markID' align="left">School_mark</TableCell>
                  <TableCell id='StudentTable_head_FacultyID' align="left">Faculty</TableCell>
                  <TableCell  id='StudentTable_head_EmailID' align="left">Email</TableCell>
                  <TableCell  id='StudentTable_head_Applicant_image_pathID' align="left">Applicant_image_path</TableCell>
                  <TableCell id='StudentTable_head_School_cert_imageID' align="left">School_cert_image</TableCell>
                  <TableCell id='StudentTable_head_certi_pdf_pathID' align="left">certi_pdf_path</TableCell>
                  
                  <TableCell id='StudentTable_head_statusID' align="left">status</TableCell>
                  <TableCell id='StudentTable_head_Accept/RejectID' align="left">Accept/Reject</TableCell>
                </TableRow>
              </TableHead>
              <TableBody style={{ color: "white" }}>
              
                  <TableRow
                  
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                   
                   <TableCell id='StudentTable_Body_NameID' align="left">Name</TableCell>
                  <TableCell id='StudentTable_Body_ID' align="left">123</TableCell>
                  <TableCell Id='StudentTable_Body_KindID' align="left">Kind</TableCell>
                  <TableCell id='StudentTable_Body_NationalityID' align="left">Nationality</TableCell>
                  <TableCell id='StudentTable_Body_Birth_CountryID' align="left">Birth_Country</TableCell>
                  <TableCell  id='SStudentTable_Body_DOBID' align="left">DOB</TableCell>
                  <TableCell id='SStudentTable_Body_School_typeID' align="left">School_type</TableCell>
                  <TableCell  id='StudentTable_Body_School_yearID' align="left">School_year</TableCell>
                  <TableCell id='StudentTable_Body_School_markID' align="left">School_mark</TableCell>
                  <TableCell id='SStudentTable_Body_FacultyID' align="left">Faculty</TableCell>
                  <TableCell  id='StudentTable_Body_mailID' align="left">Email</TableCell>
                  <TableCell  id='StudentTable_Body_Applicant_image_pathID' align="left">Applicant_image_path</TableCell>
                  <TableCell id='StudentTable_Body_School_cert_imageID' align="left">School_cert_image</TableCell>
                  <TableCell id='StudentTable_Body_certi_pdf_pathID' align="left">certi_pdf_path</TableCell>
             
                  <TableCell id='StudentTable_Body_statusID' align="left">status</TableCell>
                    <TableCell id='StudentTable_Body_Accept/RejectID' align="left">
                      <div className="acceptOrReject">
                      <a href="#" class="accept">ACCEPT <span class="fa fa-check"></span></a>
                     <a href="#" class="deny">DENY <span class="fa fa-close"></span></a>
                      </div>
                   
                    </TableCell>
                   
                      <TableCell id='StudentHostelTable_Body_statusID' align="left">
                      <span className="status"></span>
                    </TableCell>
                  </TableRow>
              
              </TableBody>
            </Table>
          </TableContainer>
        </div>
    );
  }

