import React from "react";
import { Button } from "antd";
// import styles from "./Button.module.css";
const MyButton = ({ children, ...props }) => {
  return (
    <Button type="primary" {...props} r>
      {children}
    </Button>
  );
};
export default MyButton;
