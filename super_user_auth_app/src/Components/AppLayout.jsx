import React from "react";
import Header from "./Header";
import SidebarComponent from "./SidebarComponent";
import "../Components/Styles/Layout.css";
import { useAuth0 } from "@auth0/auth0-react";
import Content from "./Contents/Content";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

const AppLayout = () => {
  const { user } = useAuth0();
  return (
    <div>
      <Header user={user} />
      <SidebarComponent />
       
    </div>
  );
};

export default AppLayout;
