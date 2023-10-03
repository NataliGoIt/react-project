import React, { useEffect, useState } from "react";
import MyModal from "../UI/modal/MyModal";
import PostFilter from "../PostFilter";

import PostList from "../postList";
import PostForm from "../PostForm";
import MyButton from "../UI/button/MyButton";
import { usePost } from "../hooks/usePost";
import PostService from "../Api/PostService";
import Load from "../UI/load/Load";
import { useFetching } from "../hooks/useFetching";
import { getPageCount, getPagesArray } from "../utils/page";
import PaginationList from "../UI/pagination/Pagination";
function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(9);
  const [page, setPage] = useState(1);
  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });
  let pagesArrays = getPagesArray(totalPages);
  useEffect(() => {
    fetchPosts();
  }, [page]);
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };
  const removePost = (post) => {
    setPosts(posts.filter((v) => v.id !== post.id));
  };
  const changePage = (page) => {
    setPage(page);
  };
  const sortedQueryPost = usePost(posts, filter.sort, filter.query);
  return (
    <div className="App">
      <MyButton onClick={fetchPosts}>Get posts</MyButton>
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Create users
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px, 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1>Ups... This error {postError}</h1>}
      {isPostLoading ? (
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
        >
          <Load />
        </div>
      ) : (
        <PostList
          remove={removePost}
          posts={sortedQueryPost}
          title="List of posts"
        />
      )}
      <PaginationList
        totalPages={pagesArrays}
        page={page}
        changePage={changePage}
      />
    </div>
  );
}

export default Posts;
