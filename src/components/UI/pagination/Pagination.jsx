import React from "react";
import { Pagination } from "antd";
const PaginationList = ({ totalPages, page, changePage }) => {
  return (
    <div className="page__wrapper">
      <Pagination defaultCurrent={page} total={totalPages} />
      {/* {totalPages.map((p) => (
        <span
          key={p}
          onClick={() => changePage(p)}
          className={page === p ? "page page__current" : "page"}
        >
          {p}
        </span>
      ))} */}
    </div>
  );
};
export default Pagination;
