import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// get all the posts
export const getPosts = () => {
  return api.get("/posts");
};

// delete a particular post
export const deletePost = (id) => {
  return api.delete(`/posts/${id}`);
};

// add a new post to the json
export const postNewPost = (post) => {
  return api.post(`/posts`, post);
};

// update a particular post in the json
export const updatePost = (id, post) => {
  return api.put(`/posts/${id}`, post);
};
