import React, { useState, useEffect } from "react";
import "./User.css";
import CDataTable from "../../Components/CDataTable";
import CButton from "../../Components/Cbutton";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate  } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();

  const handleAddUser = () => {
    navigate("/add-user");
  };

  return (
    <div className="main-content">
      <div className="page-heading">
        <h2>Users</h2>
        <CButton type="primary" icon="icon" onClick={handleAddUser}>
          <AddIcon className="mr-1" />
          Add
        </CButton>
      </div>
      <div className="card">
        <CDataTable />
      </div>
    </div>
  );
};

export default User;
