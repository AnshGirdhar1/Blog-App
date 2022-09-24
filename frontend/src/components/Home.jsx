import React, { useEffect } from "react";
import { getHomeData } from "../store/homeReducer/actions";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHomeData());
  }, []);

  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" />;
  }
  return <div>Home</div>;
};
