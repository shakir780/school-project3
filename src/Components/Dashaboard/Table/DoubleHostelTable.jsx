import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AdminModal from "../Modals/AdminModal";
import { AiFillEdit } from "react-icons/ai";
import {MdOutlineDeleteOutline } from "react-icons/md";
import "./Table.css";

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
  export default function DoubleHostelTable() {
    const [modalOpen, setModalOpen] = React.useState(false);
    return (
        <div className="Table">
        <a   className=""
     
        
        >Double Room</a>
          <TableContainer
            component={Paper}
            style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                
                <TableCell id='DoubleHostel_head_DoubleRoomID' align="left">Room Id</TableCell>
                  <TableCell id='DoubleHostel_head_StudentName' align="left">Student Name 1</TableCell>
                  <TableCell id='DoubleHostel_head_StudentId' align="left">Student ID 1</TableCell>
                  <TableCell id='DoubleHostel_head_StudentName2' align="left">Student Name 2</TableCell>
                  <TableCell id='DoubleHostel_head_StudentId2' align="left">Student ID 2</TableCell>
                 
                 
                  <TableCell id='DoubleHostel_head_DateOfStartId' align="left">Date of Start</TableCell>
                  <TableCell id='DoubleHostel_head_DateofEndId' align="left">Date of End</TableCell>
                  
                </TableRow>
              </TableHead>
              <TableBody style={{ color: "white" }}>
                
                  <TableRow
                  
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    {/* <TableCell component="th" scope="row">
                    
                    </TableCell> */}
                    <TableCell id="DoubleHostel_Body_DoubleRoomID" align="left">1235</TableCell>
                    <TableCell id='DoubleHostel_Body_StudentName' align="left">ziad</TableCell>
                    <TableCell id='DoubleHostel_Body_StudentId' align="left">134</TableCell>
                    <TableCell id='DoubleHostel_Body_StudentName2' align="left">serk </TableCell>
                    <TableCell id='DoubleHostel_Body_StudentId2' align="left">Student ID 2</TableCell>
                    <TableCell id='DoubleHostel_Body_DateOfStartId' align="left">2000/1/2t</TableCell>
                    <TableCell id='DoubleHostel_Body_DateofEndId' align="left">2000/7/2</TableCell>
               
                  
                  </TableRow>
              
              </TableBody>
            </Table>
          </TableContainer>
          {modalOpen && <AdminModal setOpenModal={setModalOpen} />}
        </div>
    );
  }