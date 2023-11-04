import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Page.css";
import "./CreateProductComponent.css";

function CreateProductComponent() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    category: "",
    name: "",
    itemUnit: "",
    quantity: "",
    price: "",
  });
  const [errors, setErrors] = useState({});

  function saveProduct(e) {
    e.preventDefault();
    if (validateForm()) {
      console.log("product =>" + JSON.stringify(product));

      axios
        .post("http://localhost:8080/add-products", product)
        .then((res) => {
          navigate("/products");
        });
    }
  }

  function validateForm() {
    let errors = {};
    let isValid = true;

    if (!product.category.trim()) {
        errors.category = "Product Category is required";
        isValid = false;
      }
      else if (!isNaN(product.category)) {
        errors.category = "Product Category must not be a number";
        isValid = false;
      }

    if (!product.name.trim()) {
      errors.name = "Product name is required";
      isValid = false;
    }
    else if (!isNaN(product.name)) {
      errors.name = "Product Name must not be a number";
      isValid = false;
    }

    if (!product.itemUnit.trim()) {
      errors.itemUnit = "Unit Details are required";
      isValid = false;
    }

    if (!product.quantity.trim()) {
      errors.quantity = "Quantity is required";
      isValid = false;
    } else if (isNaN(product.quantity)) {
      errors.quantity = "Quantity must be a number";
      isValid = false;
    }

    if (!product.price.trim()) {
      errors.price = "Price is required";
      isValid = false;
    } else if (isNaN(product.price)) {
      errors.price = "Price must be a number";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
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
          <div>
            <h3
              style={{
                marginTop: "30px",

                color: "black",
                fontWeight: "bolder",
                fontSize:"30px",
                textAlign:"center"}}>
              Add Products
            </h3>

            <div>
              <form style={{backgroundColor:"#E2FAB5"}}>

              <div>
                  <label>Category: </label>
                  <input
                    placeholder="Category"
                    name="category"
                    className="form-control"
                    value={product.category}
                    onChange={handleChange}
                  />
                  {errors.category && (
                    <div className="text-danger">{errors.category}</div>
                  )}
                </div>

                <div className="form-group">
                  <label>Product Name: </label>
                  <input
                    placeholder="Product Name"
                    name="name"
                    className="form-control"
                    value={product.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <div className="text-danger">{errors.name}</div>
                  )}
                </div>

                <div className="form-group">
                  <label>Unit Definition: </label>
                  <input
                    placeholder="Unit Definition"
                    name="itemUnit"
                    className="form-control"
                    value={product.itemUnit}
                    onChange={handleChange}
                  />
                  {errors.itemUnit && (
                    <div className="text-danger">{errors.itemUnit}</div>
                  )}
                </div>

                <div className="form-group">
                  <label>Quantity: </label>
                  <input
                    placeholder="Quantity"
                    name="quantity"
                    className="form-control"
                    value={product.quantity}
                    onChange={handleChange}
                  />
                  {errors.quantity && (
                    <div className="text-danger">{errors.quantity}</div>
                    )}
                  
                </div>

                <div className="form-group">
                  <label>Price: </label>
                  <input
                    placeholder="Price"
                    name="price"
                    className="form-control"
                    value={product.price}
                    onChange={handleChange}
                    />
                    {errors.quantity && (
                    <div className="text-danger">{errors.price}</div>
                    )}
                </div>

                <button className="savebutton" onClick={saveProduct} style={{fontSize:"20px"}}>
                  Save
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

export default CreateProductComponent;
