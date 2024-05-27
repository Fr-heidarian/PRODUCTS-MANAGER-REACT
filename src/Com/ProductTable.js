import { DataGrid } from "@mui/x-data-grid";

export default function ProductTable() {
  const columns = [
    { field: "id", headerName: "ID", width: 80 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "price", headerName: "Price", width: 100, type: "number" },
    { field: "countInStock", headerName: "ID", width: 100, type: "number" },
    { field: "createdAt", headerName: "Create Date", width: 150 },
    { field: "actions", headerName: "Actions", width: 150 },
  ];

  return <DataGrid columns={columns}></DataGrid>;
}
