import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../auth/Login";
import Signup from "../auth/Signup";
import Home from "../Pages/Home";
import Setting from "../Pages/Setting";
import LimitedTimeSell from "../Pages/LimitedTimeSell";
import CreateSell from "../Pages/CreateSell";
import History from "../Pages/History";
import Auction from "../Pages/Auction";

const Path = () => {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/auction-sell",
      element: <Auction/>,
    },
    {
      path: "/limited-time-sell",
      element: <LimitedTimeSell />,
    },
    {
      path: "/create-a-product",
      element: <CreateSell />,
    },
    {
      path: "/history",
      element: <History />,
    },
    {
      path: "/setting",
      element: <Setting />,
    },
  ];
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {routes.map((route) => {
        return (
          <Route key={route.path} path={route.path} element={route.element} />
        );
      })}
    </Routes>
  );
};

export default Path;
