import React from "react";
import MyButton from "./UI/button/MyButton";
import { Card } from "antd";
const PostItem = (props) => {
  return (
    <Card title={props.post.title} style={{ width: 300 }}>
      <div className="post_content">
        <div>{props.post.body}</div>
      </div>
      <div className="post_btn">
        <MyButton>Read more...</MyButton>
        <MyButton onClick={() => props.remove(props.post)}>
          Delete post
        </MyButton>
      </div>
    </Card>
  );
};
export default PostItem;
