// import SeriesData from "../apis/SeriesData.json";
import SeriesData from "../part-1/apis/SeriesData.json";
import { CreateList } from "./CreateSeriesList";
import "./SeriesListStyling.css";

export function DataRender() {
  return (
    <div className="container">
      <h1 className="headings">Web Series List:</h1>

      {SeriesData.map((data) => (
        <CreateList key={data.id} series={data} />
      ))}
    </div>
  );
}
