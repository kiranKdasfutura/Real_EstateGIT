import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
const PrivateRoute = () => {
  const { currentUser } = useSelector((state) => state.user);
  return <div>{currentUser ? <Outlet /> : <Navigate to={"/sign-in"} />}</div>;
};
export default PrivateRoute;
