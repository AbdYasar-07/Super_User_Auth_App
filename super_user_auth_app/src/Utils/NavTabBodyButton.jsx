import React from "react";
import { useNavigate } from "react-router";
import AppModal from "./AppModal";
import ModalDialog from "../Components/UserDetails";

const NavTabBodyButton = ({ showButton, buttonLabel }) => {
  const navigate = useNavigate();
  return (
    showButton && (
      <div>
        <AppModal buttonLabel={buttonLabel} showButton={true}/> 
        <ModalDialog/>
      </div>
    )
  );
};

export default NavTabBodyButton;
