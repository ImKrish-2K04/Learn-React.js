import "./Product.css";

function product({ name, price, option1 }) {
  const feature = option1.map((val) => <li>{val}</li>);
  const styling = {
    color: "red",
    textTransform: "capitalize",
    userSelect: "none",
  };

  return (
    <div className="product">
      <h2>{name}</h2>
      <p>{price}</p>
      <p style={styling}>{feature}</p>
    </div>
  );
}

export default product;
