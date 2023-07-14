import React, { useEffect, useState } from "react";
import Axios from "./Axios";
import { useParams } from "react-router";
import AppSpinner from "./AppSpinner";

const NavTabTable = ({ showTable, columns }) => {
  const [userGroups, setUserGroups] = useState([]);
  const { userId } = useParams();
  const resource = process.env.REACT_APP_AUTH_EXT_RESOURCE;
  const [loadSpinner, setLoadSpinner] = useState(false);

  const getUserGroups = async (accessToken, userId) => {
    await Axios(resource + `/users/${userId}/groups`, "GET", null, accessToken)
      .then((groups) => {
        setUserGroups(groups);
      })
      .catch((error) => {
        console.error("Error while fetching roles ::", error);
      })
      .finally(() => {
        setLoadSpinner(false);
      });
  };

  useEffect(() => {
    setLoadSpinner(true);
    const callUserGroups = async () => {
      await getUserGroups(
        localStorage.getItem("auth_access_token") || "",
        userId
      );
    };

    callUserGroups();
  }, []);

  return (
    <>
      {loadSpinner && <AppSpinner />}
      {!loadSpinner && showTable && (
        <div>
          <table class="table">
            <thead>
              <tr>
                {columns.map((column, index) => {
                  return (
                    <th scope="col" key={index + 1}>
                      {column}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {userGroups &&
                userGroups?.map((group, index) => {
                  return (
                    <tr key={group._id} title={group.name}>
                      <td id={group._id}>{group.name}</td>
                      <td key={index} id={group._id}>
                        {group.description}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default NavTabTable;
