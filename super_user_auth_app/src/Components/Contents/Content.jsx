import React from "react";
import { Outlet } from "react-router-dom";
import ModalDialog from "../UserDetails";
import ContentOutlet from "./ContentOutlet";

const Content = () => {
  return (
    <div>
      <Outlet/>
    </div>
  );
};

export default Content;
