import React, { useEffect, useState } from "react";
import Axios from "../../Utils/Axios";
import Groups, { ALLGroupsContent, AllGroupTable } from "../Users/Groups";
import NavTabHeader from "../../Utils/NavTabHeader";
import NavTabBody from "../../Utils/NavTabBody";
import { Outlet, useParams } from "react-router";
import Tabs from "./Tabs";
import { CodeSnippet } from "../../Utils/CodeSnippet";
import { stringify } from "json5";
const NestedContent = () => {
  const [userProfile, setUserProfile] = useState({}); // nested content header
  const [userRoles, setUserRoles] = useState(null); // nested content header
  const [userGroups, setUserGroups] = useState(null); // nested content header
  const { userId } = useParams();
  const resource = process.env.REACT_APP_AUTH_EXT_RESOURCE;

  // const [message,setMessage]=useState(null);
  let data = {
    created_at: "2023-07-06T07:29:01.948Z",
    email: "staryasar07@gmail.com",
    email_verified: true,
    identities: [
      {
        connection: "Username-Password-Authentication",
        provider: "auth0",
        user_id: "64a66d3d4f13f73a8c1a5c87",
        isSocial: false,
      },
    ],
    name: "staryasar07@gmail.com",
    nickname: "staryasar07",
    picture:
      "https://s.gravatar.com/avatar/7146ba5f4625a9e9b64e415ff4afde98?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fst.png",
    updated_at: "2023-07-12T16:46:15.003Z",
    user_id: "auth0|64a66d3d4f13f73a8c1a5c87",
    multifactor: ["guardian"],
    multifactor_last_modified: "2023-07-06T07:31:01.970Z",
    user_metadata: {
      role: "admim",
    },
    app_metadata: {
      authorization: {
        groups: ["C", "C_CA"],
        roles: [],
        permissions: [],
      },
    },
    last_ip: "106.51.3.46",
    last_login: "2023-07-12T13:07:56.590Z",
    logins_count: 45,
  };
  const message = JSON.stringify(data, null, 2);

  const GetUserProfile = async (accessToken, userId) => {
    await Axios(resource + `/users/${userId}`, "GET", null, accessToken)
      .then((userProfile) => {
        setUserProfile(userProfile);
        console.log();
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
    await GetUserGroups(accessToken, userId);
    await GetUserRoles(accessToken, userId);
  };

  useEffect(() => {
    const callUserProfile = async () => {
      await fetchUserInformation(
        localStorage.getItem("auth_access_token") || "",
        userId
      );
    };

    callUserProfile();
  }, []);
  return (
    <>
      <div
        className="d-flex align-items-center pt-2 pb-2 container"
        style={{ backgroundColor: "rgb(204 204 204 / 18%)" }}
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
      {/* <NavTabHeader /> */}
      <Tabs tabs={["Profile", "Groups", "Roles"]} />
      <Outlet/>
      {/* <CodeSnippet title="User Profile" code={message} />
      <NavTabBody />
      <ALLGroupsContent />
      <AllGroupTable /> */}
    </>
  );
};

export default NestedContent;
