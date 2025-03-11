import Card from "./CardComponent";
import "./MainComponent.css";

export default function createComponent() {
  return (
    <div className="mainContainer">
      <Card
        product={{
          pName: "Logitech MX Master",
          pDetail1: "8000 DPI",
          pDetail2: "5 Programmable Buttons",
          pMainPrice: "12,495",
          pDiscountPrice: "8,999",
        }}
      />
      <Card
        product={{
          pName: "Apple Pencil (2nd Gen)",
          pDetail1: "Intuitive Touch Surface",
          pDetail2: "Designed for Ipad Pro",
          pMainPrice: "11,900",
          pDiscountPrice: "9,199",
        }}
      />
      <Card
        product={{
          pName: "Zebronics",
          pDetail1: "Intuitive Touch Surface",
          pDetail2: "Designed for Ipad Pro",
          pMainPrice: "1,599",
          pDiscountPrice: "899",
        }}
      />
      <Card
        product={{
          pName: "Petronics Toad",
          pDetail1: "Wireless mouse 2.4GHz",
          pDetail2: "Optical Orientation",
          pMainPrice: "599",
          pDiscountPrice: "278",
        }}
      />
    </div>
  );
}
