import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { PRODUCTS_URL } from "../api/api";
import axios from "../api/http";
import { IconButton } from "@mui/material";
import PreviewIcon from "@mui/icons-material/Preview";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ViewModal from "./ViewModal";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";

export default function ProductTable({ refresh, queryString }) {
  const [products, setProducts] = useState([]);
  const [viewModalId, setViewModalId] = useState(undefined);
  const [EditModalId, setEditModalId] = useState(undefined);
  const [deleteModalId, setDeleteModalId] = useState(undefined);

  const [paginationModel, setPaginationModel] = useState({
    pageSize: 5,
    page: 0,
  });

  const [rowCount, setRowCount] = useState(0);

  useEffect(() => {
    const readProducts = async () => {
      try {
        const response = await axios.get(
          `${PRODUCTS_URL}?name=${queryString}&page=${
            paginationModel.page + 1
          }&limit=${paginationModel.pageSize}`
        );

        if (response.status === 200) {
          setProducts(response.data.products);
          setRowCount(response.data.count);
        }
      } catch (e) {
        console.log(e);
      }
    };
    readProducts();
  }, [paginationModel.page, paginationModel.pageSize, refresh, queryString]);

  const columns = [
    { field: "id", headerName: "ID", width: 80 },
    { field: "name", headerName: "Name", width: 250 },
    {
      field: "price",
      headerName: "Price",
      headerAlign: "left",
      width: 100,
      type: "number",
      align: "left",
    },
    {
      field: "countInStock",
      headerName: "Count",
      headerAlign: "left",
      width: 90,
      type: "number",
      align: "left",
      headerClassName: "custom-header",
    },
    {
      field: "createdAt",
      headerName: "Create Date",
      width: 250,
    },
    {
      field: "actions",
      headerName: "Actions",
      headerAlign: "center",
      width: 150,
      align: "center",
      renderCell: (params) => {
        return (
          <>
            <IconButton
              color="success"
              onClick={() => setViewModalId(params.id)}
            >
              <PreviewIcon />
            </IconButton>
            <IconButton
              color="warning"
              onClick={() => setEditModalId(params.id)}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              color="error"
              onClick={() => setDeleteModalId(params.id)}
            >
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

      {EditModalId && (
        <EditModal
          open={EditModalId ? true : false}
          handleClose={() => setEditModalId(undefined)}
          product={products.find((p) => p.id === EditModalId)}
        />
      )}

      {deleteModalId && (
        <DeleteModal
          open={deleteModalId ? true : false}
          handleClose={() => setDeleteModalId(undefined)}
          id={deleteModalId}
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
