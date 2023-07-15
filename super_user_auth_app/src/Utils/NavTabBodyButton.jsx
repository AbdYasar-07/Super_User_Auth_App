import React from "react";
import { useNavigate, useParams } from "react-router";
import AppModal from "./AppModal";
import ModalDialog from "../Components/UserDetails";

const NavTabBodyButton = ({ showButton, buttonLabel, isAdded, setIsAdded }) => {
  const userName = localStorage.getItem("user_profile")
    ? JSON.parse(localStorage.getItem("user_profile")).name
    : "";
  return (
    showButton && (
      <div>
        <AppModal
          buttonLabel={buttonLabel}
          showButton={true}
          dialogBoxHeader={`Add ${userName} to one or more groups`}
          tableRow={["Name", "Description"]}
          scopes={"Groups"}
          isAdded={isAdded}
          setIsAdded={setIsAdded}
        />
        {/* <ModalDialog/> */}
      </div>
    )
  );
};

export default NavTabBodyButton;
