import Prod from "./Product.jsx";
import "./ProductList.css";

function productList() {
  // const feature1 = [<li>hi-tech</li>, <li>durable</li>];
  const feature = ["hi-tech", "durable"];

  return (
    <div className="container">
      <Prod
        name="phone"
        price={29999}
        option1={feature}
        // option1={[<li>hi-tech</li>, <li>durable</li>]}
      />
    </div>
  );
}

export default productList;
