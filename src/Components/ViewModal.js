import { useEffect, useState } from "react";
import { PRODUCTS_URL } from "../api/api";
import axios from "../api/http";
import Modal from "./Modal";

export default function ViewProduct({ open, handleClose, productId }) {
  // const initialProductState = {
  //   name: "",
  //   price: 0,
  //   countInStock: 0,
  //   description: "",
  //   createdAt: "",
  // };

  const [productInfo, setProductInfo] = useState({});

  useEffect(() => {
    const viewProduct = async () => {
      try {
        const response = await axios.get(`${PRODUCTS_URL}/${productId}`);
        if (response.data) {
          setProductInfo(response.data);
        } else {
          console.error("Product data is undefined");
        }
      } catch (error) {
        console.error(error);
      }
    };
    viewProduct();
  }, []);

  return (
    <Modal
      open={open}
      handleClose={handleClose}
      handleOk={handleClose}
      title="View Product"
    >
      <div style={{ margin: "10px" }}>
        <strong>Name:</strong> {productInfo.name}
      </div>
      <div style={{ margin: "10px" }}>
        <strong>Price:</strong> {productInfo.price}
      </div>
      <div style={{ margin: "10px" }}>
        <strong>Count In Stock:</strong> {productInfo.countInStock}
      </div>
      <div style={{ margin: "10px" }}>
        <strong>Created At:</strong>
        {new Date(productInfo.createdAt).toDateString()}
      </div>
      <div style={{ margin: "10px" }}>
        <strong>Description:</strong> {productInfo.description}
      </div>
    </Modal>
  );
}
