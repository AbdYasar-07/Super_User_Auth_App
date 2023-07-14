import React from "react";
import { FaMixer } from "react-icons/fa";
import NavTabHeader from "../../Utils/NavTabHeader";
import NavTabBody from "../../Utils/NavTabBody";
import NavTabBodyButton from "../../Utils/NavTabBodyButton";
import NavTabTable from "../../Utils/NavTabTable";


const Groups = () => {
  return (
    <div className="container">
      <NavTabHeader showTab={true} tabsHeaders={["GROUPS", "ALL GROUPS"]} />
      <NavTabBody
        showDesc={true}
        description={process.env.REACT_APP_AUTH_GROUPS_DESC}
      />
      <NavTabBodyButton showButton={true} buttonLabel={"ADD USERS TO GROUPS"} />
      <NavTabTable columns={["Name", "Description"]} showTable={true} />
    </div>
  );
};

export default Groups;
