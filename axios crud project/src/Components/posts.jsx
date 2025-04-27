import { useEffect, useState } from "react";
import { deletePost, getPosts } from "@/APIs/PostApi";
import { Form } from "@/Components/form";
import { FaArrowUpLong } from "react-icons/fa6";

export const Posts = () => {
  const [data, setData] = useState([]);
  const [updatedData, setUpdatedData] = useState({});

  const getPostData = async () => {
    const posts = await getPosts();
    setData(posts.data);
  };

  const handlePostDelete = async (id) => {
    try {
      const res = await deletePost(id);
      if (res.status === 200) {
        const updatedPosts = data.filter((currPost) => currPost.id !== id);
        setData(updatedPosts);
      } else {
        alert("failed to delete the post...", res.status);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handlePostUpdate = (currPost) => setUpdatedData(currPost);

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <>
      <section className="section-form" id="form-id">
        <Form
          data={data}
          setData={setData}
          updatedData={updatedData}
          setUpdatedData={setUpdatedData}
        />
      </section>

      <a href="#parent" className="top-navigator">
        <FaArrowUpLong />
      </a>

      <section className="section-post">
        <ol>
          {data.map((currPost) => {
            const { id, body, title } = currPost;
            return (
              <li key={id}>
                <p>Title: {title}</p>
                <p>News: {body}</p>
                <button onClick={() => handlePostUpdate(currPost)}>Edit</button>
                <button
                  onClick={() => handlePostDelete(id)}
                  className="btn-delete"
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ol>
      </section>
    </>
  );
};
