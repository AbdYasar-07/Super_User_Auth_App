import React from "react";
import { Outlet } from "react-router-dom";
import NestedContent from "./NestedContents";

const NestedContentOutlet = () => {
  return (
    <div>
      <NestedContent />
      <Outlet />
    </div>
  );
};

export default NestedContentOutlet;
