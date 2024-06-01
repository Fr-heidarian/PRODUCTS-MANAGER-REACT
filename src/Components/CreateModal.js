import { TextField } from "@mui/material";
import Modal from "./Modal";
import { useState } from "react";
import { PRODUCTS_URL } from "../api/api";
import axios from "../api/http";

export default function CreateModal({ open, handleClose }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [count, setCount] = useState(0);

  const createNewProduct = async () => {
    await axios.post(PRODUCTS_URL, {
      name,
      price,
      countInStock: count,
    });
    handleClose();
  };

  return (
    <>
      <Modal
        open={open}
        handleClose={handleClose}
        title="Create Product"
        handleOk={createNewProduct}
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
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          value={price}
          onChange={(e) => setPrice(e.target.value)}
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
    </>
  );
}
