import React from "react";
import { Select } from "antd";
const MySelect = ({ options, defaultOption, value, onChange }) => {
  return (
    <Select
      placeholder="Select a..."
      onChange={(value) => onChange(value)}
      options={options}
    ></Select>
  );
};
export default MySelect;
