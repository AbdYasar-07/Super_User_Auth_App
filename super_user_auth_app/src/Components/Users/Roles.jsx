import React from "react";
import { FaMixer } from "react-icons/fa";
import NavTabHeader from "../../Utils/NavTabHeader";
import NavTabBody from "../../Utils/NavTabBody";
import NavTabBodyButton from "../../Utils/NavTabBodyButton";
import NavTabTable from "../../Utils/NavTabTable";


const Roles = () => {
  return (
    <div className="container">
      <NavTabHeader showTab={true} tabsHeaders={["Roles", "ALL Roles"]} />
      <NavTabBody
        showDesc={true}
        description={process.env.REACT_APP_AUTH_GROUPS_DESC}
      />
      <NavTabBodyButton showButton={true} buttonLabel={"ADD USERS TO Roles"} />
      <NavTabTable columns={["Name","Application", "Description"]} showTable={true} />
    </div>
  );
};

export default Roles;
