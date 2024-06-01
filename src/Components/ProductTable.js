import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { PRODUCTS_URL } from "../api/api";
import axios from "../api/http";
import { IconButton } from "@mui/material";
import PreviewIcon from "@mui/icons-material/Preview";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ProductTable() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const readProducts = async () => {
      try {
        const response = await axios.get(PRODUCTS_URL);
        if (response.status === 200) {
          setProducts(response.data.products);
        }
      } catch (e) {
        console.log(e);
      }
    };
    readProducts();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 80 },
    { field: "name", headerName: "Name", width: 250 },
    { field: "price", headerName: "Price", width: 100, type: "number" },
    { field: "countInStock", headerName: "Count", width: 100, type: "number" },
    { field: "createdAt", headerName: "Create Date", width: 300 },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: () => {
        return (
          <>
            <IconButton color="success">
              <PreviewIcon />
            </IconButton>
            <IconButton color="warning">
              <EditIcon />
            </IconButton>
            <IconButton color="error">
              <DeleteIcon />
            </IconButton>
          </>
        );
      },
    },
  ];

  const rows = products.map((p) => {
    return { ...p, createdAt: new Date(p.createdAt).toDateString() };
  });

  return <DataGrid columns={columns} rows={rows}></DataGrid>;
}