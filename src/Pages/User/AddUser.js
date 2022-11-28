import React, { useState, useEffect } from "react";
import "./User.css";
import CButton from "../../Components/Cbutton";
import CTextField from "../../Components/CTextField";

const User = () => {
  return (
    <div className="main-content">
      <div className="page-heading">
        <h2>Add User</h2>
      </div>
      <div className="card">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Role</label>
              <CTextField label={"Role Name"} placeholder="Role" />
            </div>
          </div>
        </div>
      </div>
      <div className="form-footer">
        <CButton type="primary">Save</CButton>
        <CButton type="secondary">Cancel</CButton>
      </div>
    </div>
  );
};

export default User;
