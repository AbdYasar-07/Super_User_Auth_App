import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import NavTabHeader from "../../Utils/NavTabHeader";

const GroupsOutlet = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("show");
  }, []);

  return (
    <div>
      <NavTabHeader showTab={true} tabsHeaders={["GROUPS", "ALL GROUPS"]} />
      <Outlet />
    </div>
  );
};

export default GroupsOutlet;
