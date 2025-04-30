import { FaLongArrowAltRight } from "react-icons/fa";
import worldImage from "@/public/img/world.png";
import { NavLink } from "react-router-dom";

export const MainSection = () => {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two--cols">
        <div className="hero-content">
          <h1 className="heading-xl">
            Explore the world, One Country at a time.
          </h1>
          <p className="paragraph">
            Discover the history, culture and beauty of every nation. Sort,
            search and filter through countries to find the details you need.
          </p>
          <button className="btn btn-dark btn-inline bg-white-box">
            <NavLink to="/country">
              Start Exploring <FaLongArrowAltRight />
            </NavLink>
          </button>
        </div>
        <div className="hero-image">
          <img
            src={worldImage}
            alt="world beauty"
            className="banner-image"
            loading="lazy"
          />
        </div>
      </div>
    </main>
  );
};
