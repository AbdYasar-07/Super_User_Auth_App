import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
  const { logout } = useAuth0();

  const onLogout = async () => {
    logout();
  };

  return (
    <div>
      <button className="btn btn-danger buttonStyle" onClick={() => onLogout()}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
