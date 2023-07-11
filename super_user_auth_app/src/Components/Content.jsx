import React from "react";
import { Outlet } from "react-router-dom";
import ContentHeader from "./ContentHeader";

const Content = () => {
  return (
    <div>
      <ContentHeader
        title="Users"
        description="Open a user to add them to a group or assign them to a role"
      />

      <Outlet />
    </div>
  );
};

export default Content;
