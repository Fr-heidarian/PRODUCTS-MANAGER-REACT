import Modal from "./Modal";

export default function DeleteModal({ open, handleClose }) {
 
    const deleteProduct=async()=>{}

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
