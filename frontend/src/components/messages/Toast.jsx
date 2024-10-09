import React from "react";
import { ToastContainer, toast } from "react-toastify";

export const notify = (text) => toast(text);

const Toast = () => {
  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export default Toast;
