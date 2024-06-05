import { TextField } from "@mui/material";
import Modal from "./Modal";
import { useState } from "react";


export default function EditModal({ open, handleClose }) {
  

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [count, setCount] = useState(0);



  return (
    <Modal
      open={open}
      handleClose={handleClose}
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
  );
}
