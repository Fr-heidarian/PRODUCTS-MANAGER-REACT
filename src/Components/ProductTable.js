import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { PRODUCTS_URL } from "../api/api";
import axios from "../api/http";
import { IconButton } from "@mui/material";
import PreviewIcon from "@mui/icons-material/Preview";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ViewModal from "./ViewModal";

export default function ProductTable() {
  const [products, setProducts] = useState([]);
  const [viewModalId, setViewModalId] = useState(undefined);

  const [paginationModel, setPaginationModel] = useState({
    pageSize: 5,
    page: 1,
  });

  const [rowCount, setRowCount] = useState(0);

  // let rowCount = 0;

  useEffect(() => {
    const readProducts = async () => {
      try {
        const response = await axios.get(
          `${PRODUCTS_URL}?page=${paginationModel.page}&limit=${paginationModel.pageSize}`
        );

        if (response.status === 200) {
          setProducts(response.data.products);
          // rowCount = response.data.count;
          setRowCount(response.data.count);
        }
      } catch (e) {
        console.log(e);
      }
    };
    readProducts();
  }, [paginationModel.page, paginationModel.pageSize]);

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
      renderCell: (params) => {
        return (
          <>
            <IconButton
              color="success"
              onClick={() => setViewModalId(params.id)}
            >
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

  return (
    <>
      {viewModalId && (
        <ViewModal
          open={viewModalId ? true : false}
          handleClose={() => setViewModalId(undefined)}
          productId={products.find((p) => p.id === viewModalId).id}
        />
      )}

      <DataGrid
        columns={columns}
        rows={rows}
        paginationMode="server"
        rowCount={rowCount}
        pageSizeOptions={[5, 10, 25]}
        paginationModel={paginationModel}
        onPaginationModelChange={(newModel) => setPaginationModel(newModel)}
      />
    </>
  );
}
