import { postNewPost, updatePost } from "@/APIs/PostApi";
import { useEffect, useState } from "react";

export const Form = ({ data, setData, updatedData, setUpdatedData }) => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  const handleInputValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  useEffect(() => {
    updatedData &&
      setFormData({
        title: updatedData.title || "",
        body: updatedData.body || "",
      });
  }, [updatedData]);

  const addNewData = async () => {
    try {
      const response = await postNewPost(formData);
      if (response.status === 201) {
        setData([...data, response.data]);
        setFormData({
          title: "",
          body: "",
        });
      } else {
        console.log("data adding is failed...", response.status);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const updatePostData = async () => {
    try {
      const res = await updatePost(updatedData.id, formData);
      if (res.status === 200) {
        setData(
          data.map((currPost) => {
            return currPost.id === res.data.id ? res.data : currPost;
          })
        );
      } else {
        console.log("updating the post is failed...", res.status);
      }

      setFormData({
        title: "",
        body: "",
      });
      setUpdatedData({});
    } catch (err) {
      console.log(err);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const choice = e.nativeEvent.submitter.value;

    if (choice === "Add") {
      addNewData();
    } else if (choice === "Edit") {
      updatePostData();
    }
  };

  const editStateOn = Object.keys(updatedData).length !== 0;

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <input
          type="text"
          name="title"
          id="title"
          autoComplete="off"
          placeholder="Add Title"
          onChange={handleInputValue}
          value={formData.title}
        />
      </div>
      <div>
        <input
          type="text"
          name="body"
          id="body"
          autoComplete="off"
          placeholder="Add Post"
          onChange={handleInputValue}
          value={formData.body}
        />
      </div>
      <button type="submit" value={`${editStateOn ? "Edit" : "Add"}`}>{`${
        editStateOn ? "Edit" : "Add"
      }`}</button>
    </form>
  );
};
