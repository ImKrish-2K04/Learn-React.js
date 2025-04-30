import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import footerData from "@/Services/data/footerData.json";

export const Footer = () => {
  const icons = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };

  return (
    <footer className="footer-section">
      <div className="container grid grid-three--cols">
        {footerData.map((currData, ind) => {
          const { icon, title, details } = currData;
          return (
            <div key={ind} className="footer-contact">
              <div className="icon">{icons[icon]}</div>
              <div className="footer-contact-text">
                <p>{title}</p>
                <p>{details}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="copyright-area">
        <div className="container">
          <p>Copyright &copy;2025, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};
