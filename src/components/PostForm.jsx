import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", description: "" });
  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = { ...post, id: Date.now() };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <div>
      <form>
        <MyInput
          value={post.title}
          type="text"
          placeholder="Title post"
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        <MyInput
          value={post.body}
          type="text"
          placeholder="description post"
          onChange={(e) => setPost({ ...post, body: e.target.value })}
        />
        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
    </div>
  );
};
export default PostForm;
