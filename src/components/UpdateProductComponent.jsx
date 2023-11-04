import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./UpdateProductComponent.css";
import "./Page.css";

function UpdateProductComponent() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({
    id: "",
    category: "",
    name: "",
    itemUnit: "",
    quantity: "",
    price: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8080/get-product/${id}`).then((res) => {
      const productData = res.data;
      setProduct(productData);
    });
  }, [id]);

  function updateProduct(e) {
    e.preventDefault();

    // perform form validation
    const validationErrors = {};
    if (!product.name) {
      validationErrors.name = "Product name is required";
    }
    if (!product.itemUnit) {
      validationErrors.itemUnit = "Unit Difinition is required";
    }
    if (!product.quantity) {
      validationErrors.quantity = "Product quantity is required";
    }
    if (!product.price) {
      validationErrors.price = "Product price is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    axios.put(`http://localhost:8080/update-product/${id}`, product).then((res) => {
      navigate("/products");
    });
  }

  function cancel(e) {
    e.preventDefault();
    navigate("/products");
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div >
            <h3 style={{
                marginTop: "30px",

                color: "black",
                fontWeight: "bolder",
                fontSize:"30px",
                textAlign:"center"}}>Update Product</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>Product ID: </label>
                  <input
                    placeholder="Product ID"
                    name="id"
                    className="form-control"
                    value={product.id}
                    disabled
                  />
                </div>

                <div className="form-group">
                  <label>Category: </label>
                  <input
                    placeholder="Category"
                    name="category"
                    className="form-control"
                    value={product.category}
                    disabled
                  />
                </div>

                <div className="form-group">
                  <label>Product Name: </label>
                  <input
                    placeholder="Product Name"
                    name="name"
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    value={product.name}
                    onChange={handleChange}
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>

                <div className="form-group">
                  <label>Unit Definition: </label>
                  <input
                    placeholder="Unit Definition"
                    name="itemUnit"
                    className={`form-control ${errors.itemUnit ? 'is-invalid' : ''}`}
                    value={product.itemUnit}
                    onChange={handleChange}
                  />
                  {errors.itemUnit && <div className="invalid-feedback">{errors.itemUnit}</div>}
                </div>

                <div className="form-group">
                  <label>Quantity: </label>
                  <input
                    placeholder="Quantity"
                    name="quantity"
                    className={`form-control ${errors.quantity ? 'is-invalid' : ''}`}
                    value={product.quantity}
                    onChange={handleChange}
                  />
                  {errors.quantity && <div className="invalid-feedback">{errors.quantity}</div>}
                </div>

                <div className="form-group">
                  <label>Price: </label>
                  <input
                    placeholder="Price"
                    name="price"
                    className={`form-control ${errors.price ? 'is-invalid' : ''}`}
                    value={product.price}
                    onChange={handleChange}
                  />
                  {errors.price && <div className="invalid-feedback">{errors.price}</div>}
                </div>

                <button className="savebutton" onClick={updateProduct} style={{fontSize:"20px"}}>
                  Update
                </button>
                <button
                  className="deletebutton"
                  onClick={cancel}
                  style={{marginLeft:"250px",marginTop:"20px",fontSize:"20px"}}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateProductComponent;