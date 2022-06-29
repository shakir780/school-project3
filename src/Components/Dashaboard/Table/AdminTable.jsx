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
  export default function AdminTable() {
    const [modalOpen, setModalOpen] = React.useState(false);
    return (
        <div className="Table">
        <a   className="addAdmin"
        onClick={() => {
            setModalOpen(true);
          }}
        
        >Add new Admin</a>
          <TableContainer
            component={Paper}
            style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Admins</TableCell>
                  <TableCell id='Admin_head_usernameID' align="left">Username</TableCell>
                  <TableCell id='Admin_head_AdminPasswordId' align="left">Password</TableCell>
                  <TableCell id='Admin_head_AdminEmailId' align="left">Email</TableCell>
                  <TableCell id='Admin_head_EditDeleteId' align="left">Edit/Delete</TableCell>
                 
                </TableRow>
              </TableHead>
              <TableBody style={{ color: "white" }}>
                
                  <TableRow
                  
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                  
                  <TableCell>Admins</TableCell>
                  <TableCell id='Admin_Body_usernameID' align="left">Username</TableCell>
                  <TableCell id='Admin_Body_AdminPasswordId' align="left">Password</TableCell>
                  <TableCell id='Admin_Body_AdminEmailId' align="left">Email</TableCell>
                    <TableCell id='Admin_Body_EditDeleteID' align="left">
                      <div className="adminacceptOrReject">
                      <a href="#" class="accept"><AiFillEdit/>  <span class="fa fa-check"></span></a>
                     
                     <a href="#" class="deny"><MdOutlineDeleteOutline/><span class="fa fa-close"></span></a>
                      </div>
                   
                    </TableCell>
                 
                  
                  </TableRow>
             
              </TableBody>
            </Table>
          </TableContainer>
          {modalOpen && <AdminModal setOpenModal={setModalOpen} />}
        </div>
    );
  }