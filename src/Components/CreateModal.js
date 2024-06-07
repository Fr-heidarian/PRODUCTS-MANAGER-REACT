import { TextField } from "@mui/material";
import Modal from "./Modal";
import { useState } from "react";
import { PRODUCTS_URL } from "../api/api";
import axios from "../api/http";

export default function CreateModal({ open, handleClose }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [count, setCount] = useState(0);
  const [errors, setErrors] = useState({ name: "", count: "", price: "" });

  const createNewProduct = async () => {
    if (errors.name === "" && errors.count === "" && errors.price === "") {
      await axios.post(PRODUCTS_URL, {
        name,
        price,
        countInStock: count,
      });
      handleClose();
    }
  };

  const validateName = (value) => {
    setErrors({ ...errors, name: "" });

    if (!value) {
      setErrors({ ...errors, name: "Name can not be empty" });
    } else if (new RegExp("[0-9]").test(value)) {
      setErrors({ ...errors, name: "Name can not contain numbers" });
    }
    setName(value);
  };

  const validateCount = (value) => {
    setErrors({ ...errors, count: "" });

    if (!value) {
      setErrors({ ...errors, count: "Count can not be empty" });
    } else if (Number(value) > 1000) {
      setErrors({ ...errors, count: "Count can not be greater than 1000" });
    }
    setCount(value);
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
          onChange={(e) => validateName(e.target.value)}
        />
        {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
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
          onChange={(e) => validateCount(e.target.value)}
        />
        {errors.count && <span style={{ color: "red" }}>{errors.count}</span>}
      </Modal>
    </>
  );
}
