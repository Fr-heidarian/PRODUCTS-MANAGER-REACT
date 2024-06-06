import { PRODUCTS_URL } from "../api/api";
import axios from "../api/http";
import Modal from "./Modal";

export default function DeleteModal({ open, handleClose, id }) {
  const deleteProduct = async () => {
    try {
      await axios.delete(`${PRODUCTS_URL}/${id}`);
    } catch (e) {
      console.log(e);
    } finally {
      handleClose();
    }
  };

  return (
    <Modal
      open={open}
      handleClose={handleClose}
      handleOk={deleteProduct}
      title="Delete Product"
    >
      Are you sure want to delete this item ?
    </Modal>
  );
}
