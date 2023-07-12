import React from "react";
import { Outlet } from "react-router-dom";
import ContentHeader from "../Contents/ContentHeader";
import ContentBody from "../Contents/ContentBody";

const Content = () => {
  return (
    <div>
      <ContentHeader
        title="Users"
        description="Open a user to add them to a group or assign them to a role"
      />
      <ContentBody />
      <Outlet />
    </div>
  );
};

export default Content;
