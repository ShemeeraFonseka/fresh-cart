import React from "react";
import { useNavigate } from "react-router-dom";
import ProductService from "../services/ProductService";
import "./Page.css";

function useListProductComponent() {
  const [products, setProducts] = React.useState([]);

  const navigate = useNavigate();

  React.useEffect(() => {
    ProductService.getProducts().then((res) => {
        setProducts(res.data);
    });
  }, []);

  const handleAddProduct = () => {
    navigate("/add-products");
  };

  const handleUpdateProduct = (id) => {
    navigate(`/update-products/${id}`);
  };

  const handleDeleteProduct = (id) => {
    ProductService.deleteProduct(id).then(() => {
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      );
    });
  };

  return {
    products,
    handleAddProduct,
    handleUpdateProduct,
    handleDeleteProduct,
  };
}

function ListProductComponent() {
  const {
    products,
    handleAddProduct,
    handleUpdateProduct,
    handleDeleteProduct,
  } = useListProductComponent();

  return (
    <div>
      <h2 style={{ marginTop: "40px",marginBottom: "30px",color:"black",fontWeight:"bold",
    textAlign:"center",fontSize:"30px"}} className="text-center">Product List</h2>
      <div>
        <button className="button" onClick={handleAddProduct} style={{marginBottom:"30px"}}>
          Add Product
        </button>
      </div>
      <div>
        <table className="tablestyle">
          <thead>
            <tr>
              <th style={{textAlign:"center"}}>Product ID</th>
              <th style={{textAlign:"center"}}>Category</th>
              <th style={{textAlign:"center"}}>Product Name</th>
              <th style={{textAlign:"center"}}>Unit Definition</th>
              <th style={{textAlign:"center"}}>Quantity(KG/Unit)</th>
              <th style={{textAlign:"center"}}>Unit Price(Rs.)</th>
              <th style={{textAlign:"center"}}>Action</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.category}</td>
                <td>{product.name}</td>
                <td>{product.itemUnit}</td>
                <td>{product.quantity}</td>
                <td>{product.price}</td>
                <td>
                    <div>
                  <button className="updatebutton" style={{ marginBottom: "10px"}}
                    onClick={() => handleUpdateProduct(product.id)}
                  >
                    Update
                  </button>
                  </div>
                  <div>
                  <button
                    className="deletebutton"style={{ marginBottom: "10px" }}
                    onClick={() => handleDeleteProduct(product.id)}
                    
                  >
                    Delete
                  </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default ListProductComponent;