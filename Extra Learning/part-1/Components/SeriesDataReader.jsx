import SeriesData from "../apis/SeriesData.json";
import { CreateList } from "./CreateSeriesList";
import "../Components/SeriesListStyling.css";

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
