import React, { useEffect } from "react";
import axios from "../utils/axios";

const NotePage = () => {
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/notes/");
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
