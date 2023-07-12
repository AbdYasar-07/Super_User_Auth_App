import { async } from "q";
import React, { useEffect, useState } from "react";
import Axios from "../../Utils/Axios";
//import ContentTabs from "./ContentTabs";
const NestedContent = () => {
  const [userProfile, setUserProfile] = useState({}); // nested content header
  const [userRoles, setUserRoles] = useState(null); // nested content header
  const [userGroups, setUserGroups] = useState(null); // nested content header
  const resource = process.env.REACT_APP_AUTH_EXT_RESOURCE;

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
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkNLM1RXYkZRcGFjV1NET3Rxc3VoNSJ9.eyJpc3MiOiJodHRwczovL2Rldi0zNGNodnF5aTRpMmJla2VyLmpwLmF1dGgwLmNvbS8iLCJzdWIiOiJLVHg1cnNqWTRVUXBjYkRrYlJrRkx6YWlVRGxzTk5MREBjbGllbnRzIiwiYXVkIjoidXJuOmF1dGgwLWF1dGh6LWFwaSIsImlhdCI6MTY4OTA5NTc1OSwiZXhwIjoxNjg5MTgyMTU5LCJhenAiOiJLVHg1cnNqWTRVUXBjYkRrYlJrRkx6YWlVRGxzTk5MRCIsInNjb3BlIjoicmVhZDp1c2VycyByZWFkOmFwcGxpY2F0aW9ucyByZWFkOmNvbm5lY3Rpb25zIHJlYWQ6Y29uZmlndXJhdGlvbiByZWFkOmdyb3VwcyByZWFkOnJvbGVzIHJlYWQ6cGVybWlzc2lvbnMgcmVhZDpyZXNvdXJjZS1zZXJ2ZXIiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.q4tKOIiAKLD_LU9EcjYDal7MaTRwz9l4R_-FYjWuDyPfO8MwdWc5yr4cLoA9UYgkHbagSr-EfTRLEU4X1kgV88r7XR4DqHJdLX1x1gPoHZ17lBdOCmiik7J0hoRu1p2AnfHaBFJTJGYgR-lp6PRw-ScnTSsUc3aBq3v_XlaxoOGVJ-PvqkwPocFurQP_GY8jpSVufOVZE7Ds-WNBj5BUJOLI5cFkknR3Ek-bTngyR8LV5lLXvspEIqUvmkSl8aNw31cep9BsdS__GVQDtGc8ZsBFOLtDSZWUlsqbESVDQDGeo-cf-q0RModT-qc2zski7awZoWD-2YP5jDORmUV0EQ",
        "auth0|64a66d3d4f13f73a8c1a5c87"
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
      {/* <ContentTabs navTabValue={["Profile", "Group", "Role"]}/> */}
    </>
  );
};

export default NestedContent;
