import { TextField } from "@mui/material";
import Modal from "./Modal";

export default function CreateModal({ open, handleClose }) {
  return (
    <>
      <Modal open={open} handleClose={handleClose} title="Create Product">
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
        />
      </Modal>
    </>
  );
}
