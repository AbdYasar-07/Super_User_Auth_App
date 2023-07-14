import React, { useEffect, useState } from "react";
import Axios from "../../Utils/Axios";
import Groups, { ALLGroupsContent, AllGroupTable } from "../Users/Groups";
import NavTabHeader from "../../Utils/NavTabHeader";
import NavTabBody from "../../Utils/NavTabBody";
import { Outlet, useParams, useNavigate } from "react-router";
import Tabs from "./Tabs";
import { CodeSnippet } from "../../Utils/CodeSnippet";
import { stringify } from "json5";
import "../Styles/NestedContent.css";
import NestedContentOutlet from "./NestedContentOutlet";

const NestedContent = () => {
  const [userProfile, setUserProfile] = useState({}); // nested content header
  const [userRoles, setUserRoles] = useState(null); // nested content header
  const [userGroups, setUserGroups] = useState(null); // nested content header
  const { userId } = useParams();
  const navigate = useNavigate();
  const resource = process.env.REACT_APP_AUTH_EXT_RESOURCE;

  const GetUserProfile = async (accessToken, userId) => {
    await Axios(resource + `/users/${userId}`, "GET", null, accessToken)
      .then((userProfile) => {
        setUserProfile(userProfile);
        localStorage.setItem("user_profile", JSON.stringify(userProfile));
      })
      .catch((error) => {
        console.error("Error while fetching user information ::", error);
      });
  };

  const GetUserRoles = async (accessToken, userId) => {
    await Axios(resource + `/users/${userId}/roles`, "GET", null, accessToken)
      .then((roles) => {
        setUserRoles(roles);
      })
      .catch((error) => {
        console.error("Error while fetching roles ::", error);
      });
  };

  const GetUserGroups = async (accessToken, userId) => {
    await Axios(resource + `/users/${userId}/groups`, "GET", null, accessToken)
      .then((groups) => {
        setUserGroups(groups);
      })
      .catch((error) => {
        console.error("Error while fetching roles ::", error);
      });
  };

  const fetchUserInformation = async (accessToken, userId) => {
    await GetUserProfile(accessToken, userId);
    // await GetUserGroups(accessToken, userId);
    // await GetUserRoles(accessToken, userId);
  };

  useEffect(() => {
    const callUserProfile = async () => {
      await fetchUserInformation(
        localStorage.getItem("auth_access_token") || "",
        userId
      );
    };

    navigate(`/users/${userId}/profile`);
    callUserProfile();
  }, []);
  return (
    <>
      <div
        className="d-flex align-items-center pt-2 pb-2 container profileHeader"
        style={{
          backgroundColor: "rgb(204 204 204 / 18%)",
          height: "150px !important",
        }}
      >
        <div className="col-2">
          <img
            src={userProfile.picture}
            alt="user profile"
            class="rounded-circle"
            width="80"
            height="80"
          />
        </div>
        <div className="col-6 text-start">
          <h2 className="fw-normal">{userProfile.name}</h2>
          <h5 className="fw-light text-secondary">{userProfile.email}</h5>
        </div>
      </div>
      <Tabs tabs={["Profile", "Groups", "Roles"]} />
    </>
  );
};

export default NestedContent;
