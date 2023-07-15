import React, { useEffect, useState } from "react";
import { FaMixer } from "react-icons/fa";
import NavTabHeader from "../../Utils/NavTabHeader";
import NavTabBody from "../../Utils/NavTabBody";
import NavTabBodyButton from "../../Utils/NavTabBodyButton";
import NavTabTable from "../../Utils/NavTabTable";

const Groups = () => {
  const [isAdded, setIsAdded] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    setIsDeleted(false);
  }, [isDeleted]);

  return (
    <div className="container">
      <NavTabBody
        showDesc={true}
        description={process.env.REACT_APP_AUTH_GROUPS_DESC}
      />
      <NavTabBodyButton
        showButton={true}
        buttonLabel={"ADD USERS TO GROUPS"}
        isAdded={isAdded}
        setIsAdded={setIsAdded}
      />
      <NavTabTable
        columns={["Name", "Description", "Remove"]}
        showTable={true}
        isAdded={isAdded}
        setIsAdded={setIsAdded}
        showEditButton={true}
        scope={"Group"}
        isDeleted={isDeleted}
        setIsDeleted={setIsDeleted}
      />
    </div>
  );
};

export default Groups;
