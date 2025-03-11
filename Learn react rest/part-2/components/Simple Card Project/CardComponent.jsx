import "./CardComponent.css";

export default function Card({ product }) {
  return (
    <div className="card">
      <h3 className="productName">{product.pName}</h3>
      <p>{product.pDetail1}</p>
      <p>{product.pDetail2}</p>
      <div className="price-bar">
        <p className="mainPrice">{product.pMainPrice}</p>
        <p className="origPrice">{product.pDiscountPrice}</p>
      </div>
    </div>
  );
}
