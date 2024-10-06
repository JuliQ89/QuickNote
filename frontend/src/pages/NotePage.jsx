import React, { useEffect } from "react";
import { axiosInstance } from "../utils/axios";

const NotePage = () => {
  useEffect(() => {
    (async () => {
      try {
        const response = await axiosInstance.get("/api/notes/");
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
      <h2>Notes</h2>
    </div>
  );
};

export default NotePage;
