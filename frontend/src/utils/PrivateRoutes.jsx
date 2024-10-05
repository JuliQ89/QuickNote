import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

const PrivateRoutes = ({ children }) => {
  const data = useSelector((state) => state.tokenData);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(data);
  }, [dispatch]);

  const isAuthenticated = data?.user === null ? false : true;
  return (
    <>
      {isAuthenticated ? (
        <>
          <h5>Hallo {data?.user.username}</h5>
          <h5>Deine Email: {data?.user.email}</h5>
          {children}
        </>
      ) : (
        <span>
          Du bist nicht eingeloggt <Link to="/login">Login</Link>
        </span>
      )}
    </>
  );
};

export default PrivateRoutes;
