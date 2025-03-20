import { useState } from "react";

export default function CommentHandling() {
  const [formProperties, setFormProperties] = useState({
    username: "",
    remarks: "",
    rating: 3,
  });

  const handleFormProperties = (e) => {
    setFormProperties((currData) => {
      return { ...currData, [e.target.name]: e.target.value };
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormProperties({
      username: "",
      remarks: "",
      rating: 3,
    });
  };

  return (
    <form action="#" onSubmit={handleFormSubmit}>
      <h2>Give a Comment!</h2>

      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="username">Enter username: </label>
            </td>
            <td>
              <input
                type="text"
                name="username"
                id="username"
                onChange={handleFormProperties}
                value={formProperties.username}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="remarks">Remarks: </label>
            </td>
            <td>
              <textarea
                name="remarks"
                id="remarks"
                onChange={handleFormProperties}
                value={formProperties.remarks}
              ></textarea>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="ratings">ratings</label>
            </td>
            <td>
              <input
                type="number"
                name="rating"
                id="ratings"
                min={1}
                max={5}
                onChange={handleFormProperties}
                value={formProperties.rating}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button>Add comment</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}
