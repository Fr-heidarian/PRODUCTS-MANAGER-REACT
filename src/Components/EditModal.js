import { TextField } from "@mui/material";
import Modal from "./Modal";
import { useState } from "react";
import { PRODUCTS_URL } from "../api/api";
import axios from "../api/http";

export default function EditModal({ open, handleClose, product }) {
  const { id, name, price, countInStock } = product;

  const [tempName, setTempName] = useState(name);
  const [tempPrice, setTempPrice] = useState(price);
  const [count, setCount] = useState(countInStock);

  const editProduct = async () => {
    await axios.put(`${PRODUCTS_URL}/${id}`, {
      name: tempName,
      price: tempPrice,
      countInStock: count,
    });
    handleClose();
  };

  return (
    <Modal
      open={open}
      handleClose={handleClose}
      handleOk={editProduct}
      title={"Edit Modal"}
    >
      <TextField
        autoFocus
        required
        margin="dense"
        id="name"
        name="name"
        label="Name"
        type="text"
        fullWidth
        variant="standard"
        value={tempName}
        onChange={(e) => setTempName(e.target.value)}
      />
      <TextField
        autoFocus
        required
        margin="dense"
        id="price"
        name="price"
        label="Price"
        type="text"
        fullWidth
        variant="standard"
        value={tempPrice}
        onChange={(e) => setTempPrice(e.target.value)}
      />
      <TextField
        autoFocus
        required
        margin="dense"
        id="count"
        name="count"
        label="Count"
        type="number"
        fullWidth
        variant="standard"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
    </Modal>
  );
}
