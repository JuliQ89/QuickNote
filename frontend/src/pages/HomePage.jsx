import React, { useEffect } from "react";

import { axiosInstance } from "../utils/constants";

const HomePage = () => {
  useEffect(() => {
    (async () => {
      try {
        const response = await axiosInstance.get("/api/colors/");
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default HomePage;
