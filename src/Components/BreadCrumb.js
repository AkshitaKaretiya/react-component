import React, { useState, useEffect } from "react";
import "./css/BreadCrumb.css";

const BreadCrumb = () => {
    
  return (
    <div class="breadcrumb-sec">
      <ul class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#">Home</a>
        </li>
        <li class="breadcrumb-item" aria-current="page">
          Users
        </li>
      </ul>
    </div>
  );
};

export default BreadCrumb;
