export function CreateList({ series }) {
  // doing further destructuring!
  const { name, img_url, rating, description, cast, genre, watch_url } = series;
  let style1 = {
    color: "lightgreen",
    backgroundColor: "black",
    borderRadius: "10px",
    padding: "2.5px 8px",
  };

  let style2 = {
    color: "yellow",
    backgroundColor: "black",
    borderRadius: "10px",
    padding: "2.5px 8px",
  };

  let btn1 = {
    backgroundColor: "lightgreen",
    color: "black",
  };

  let btn2 = {
    backgroundColor: "yellow",
    color: "black",
  };

  return (
    <article>
      <div>
        <img
          src={img_url}
          alt={`${name} image`}
          height="175px"
          width="100%"
          loading="lazy"
        />
      </div>
      <div className="content">
        <h3>Series Name: {name}</h3>
        <p className="rating">
          Rating: <span style={rating > 8.5 ? style1 : style2}>{rating}</span>
        </p>
        <p className="description">Description: {description}</p>
        <p className="casts">Cast: {cast.join(", ")}</p>
        <p>Genre: {genre.join(", ")}</p>
        <a
          className="button text-3xl font-bold underline"
          style={rating > 8.5 ? btn1 : btn2}
          href={watch_url}
        >
          Watch Now
        </a>
      </div>
    </article>
  );
}
