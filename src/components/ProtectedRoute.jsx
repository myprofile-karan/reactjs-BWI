import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const navigate = useNavigate();
  const { Component } = props;

  useEffect(() => {
    async function isLoggedIn() {
      const token = JSON.parse(localStorage.getItem("token") || "false");
      if (!token) {
        await navigate("/login");
      }
    }
    isLoggedIn();
  }, []);
  return <div>
    <Component />
  </div>;
};

export default ProtectedRoute;
