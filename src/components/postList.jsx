import React from "react";
import PostItem from "./postItem";
import { Col, Row } from "antd";
const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Posts is not found!</h1>
      </div>
    );
  }
  return (
    // <h1 style={{ textAlign: "center" }}>{title}</h1>
    <Row gutter={16}>
      {posts.map((post, index) => (
        <Col span={8}>
          <PostItem
            remove={remove}
            number={index + 1}
            post={post}
            key={post.id}
          />
        </Col>
      ))}
    </Row>
  );
};
export default PostList;
