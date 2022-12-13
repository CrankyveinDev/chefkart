import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { darken, lighten } from "@mui/material/styles";
import "./table.css"

const columns = [
  { field: "firstName", headerName: "First name", flex: 1 },
  { field: "lastName", headerName: "Last name", flex: 1 },
  {
    field: "age",
    headerName: "Age",
    //   type: 'number',
    flex: 1,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: true,
    flex: 1,
  },
  {
    field: "status",
    headerName: "Status",
    description: "This column is for Status and not sortable",
    sortable: false,
    flex: 1,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35,fullName:"jon Snow",status:"true" },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42,status:"false",fullName:"Cersei Lannister"},
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45,status:"true",fullName:"Jaime Lannister" },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16,status:"false",fullName:"Arya Stark" },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 40,status:"false",fullName:"Daenerys Targraryen" },
  { id: 6, lastName: "Melisandre", firstName: "Kapil", age: 150 ,status:"true",fullName:"kapil Melisandre"},
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44,status:"false",fullName:"Ferrara clifford" },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36,status:"true",fullName:"Rossini Frances" },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65,status:"false",fullName:"Harvey Roxie" },
];

const getBackgroundColor = (color, mode) => mode === "dark" ? darken(color, 0.6) : lighten(color, 0.6);
function Table() {
  return (
    <div className="tableDiv">
      <Box
        sx={{
          height: 400,
          width: "100%",
          "& .super-app-theme--true": {
            bgcolor: (theme) =>
              getBackgroundColor(
                theme.palette.success.main,
                theme.palette.mode
              ),
          },
          "& .super-app-theme--false": {
            bgcolor: (theme) =>
              getBackgroundColor(theme.palette.error.main, theme.palette.mode),
          },
        }}
      >
      <div className="table">
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableColumnFilter
          disableColumnSelector
          getRowClassName={(params) => `super-app-theme--${params.row.status}`}
        />
        </div>
      </Box>
    </div>
  );
}

export default Table;
