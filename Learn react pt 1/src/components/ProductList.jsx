import Prod from "./Product.jsx";
import "./ProductList.css";

function productList() {
  return (
    <div className="container">
      <Prod />
      <Prod />
      <Prod />
    </div>
  );
}

export default productList;
