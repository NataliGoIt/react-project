import React from "react";

import MySelect from "../components/UI/select/MySelect";
import MyInput from "../components/UI/input/MyInput";
const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Find the post"
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        options={[
          { value: "title", label: "Name" },
          { value: "body", label: "Description" },
        ]}
      />
    </div>
  );
};
export default PostFilter;
