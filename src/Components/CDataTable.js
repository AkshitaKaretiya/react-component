import React, { useState, useEffect } from "react";
import "./css/CDataTable.css";
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
  Grid,
} from "@mui/x-data-grid";
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

import "./css/CDataTable.css";

const CDataTable = () => {
  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    {
      field: "roleCode",
      headerName: "Role Code",
      flex: 1,
    },
    {
      field: "roleName",
      headerName: "Raole Name",
      flex: 1,
    },
    {
      field: "displayName",
      headerName: "Display Name",
      flex: 1,
    },
    {
      field: "loginName",
      headerName: "Login Name",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      sortable: false,
      flex: 1,
    },
  ];

  const rows = [
    {
      id: 1,
      roleCode: 258,
      roleName: "Operator",
      displayName: "Tango Charlie",
      loginName: "Alex Gaudreault",
      status: "Deactivate",
    },
    {
      id: 2,
      roleCode: 258,
      roleName: "Operator",
      displayName: "Tango Charlie",
      loginName: "Alex Gaudreault",
      status: "Deactivate",
    },
    {
      id: 3,
      roleCode: 258,
      roleName: "Operator",
      displayName: "Tango Charlie",
      loginName: "Alex Gaudreault",
      status: "Deactivate",
    },
    {
      id: 4,
      roleCode: 258,
      roleName: "Operator",
      displayName: "Tango Charlie",
      loginName: "Alex Gaudreault",
      status: "Deactivate",
    },
    {
      id: 5,
      roleCode: 258,
      roleName: "Operator",
      displayName: "Tango Charlie",
      loginName: "Alex Gaudreault",
      status: "Deactivate",
    },
  ];

  const CustomPagination = () => {
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);
    return (
      <Pagination
        color="primary"
        variant="outlined"
        shape="rounded"
        page={page + 1}
        count={pageCount}
        renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
        onChange={(event, value) => apiRef.current.setPage(value - 1)}
      />
    );
  };

  return (
    <div className="table-box">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={3}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        sx={{
          border: 0,
        }}
        components={{
          Pagination: CustomPagination,
        }}
      />
    </div>
  );
};

export default CDataTable;
