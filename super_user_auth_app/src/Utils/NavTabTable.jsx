import React, { useEffect, useState } from "react";
import Axios from "./Axios";
import { useParams } from "react-router";
import AppSpinner from "./AppSpinner";
import { FaTimes } from "react-icons/fa";

const NavTabTable = ({
  showTable,
  columns,
  isAdded,
  setIsAdded,
  showEditButton,
  scope,
  isDeleted,
  setIsDeleted,
}) => {
  const [userGroups, setUserGroups] = useState([]);
  const { userId } = useParams();
  const resource = process.env.REACT_APP_AUTH_EXT_RESOURCE;
  const [loadSpinner, setLoadSpinner] = useState(false);

  const getUserGroups = async (accessToken, userId) => {
    await Axios(resource + `/users/${userId}/groups`, "GET", null, accessToken)
      .then((groups) => {
        setUserGroups(groups);
        setIsAdded(false);
      })
      .catch((error) => {
        console.error("Error while fetching roles ::", error);
      })
      .finally(() => {
        setLoadSpinner(false);
      });
  };

  const remove = async (id, scope) => {
    const resource = process.env.REACT_APP_AUTH_EXT_RESOURCE;
    switch (scope?.toLowerCase()) {
      case "group": {
        await Axios(
          resource + `/groups/${id}/members`,
          "DELETE",
          [`${userId}`],
          localStorage.getItem("auth_access_token")
        )
          .then((response) => {
            console.log("***", response);
            setIsDeleted(true);
          })
          .catch((error) => {
            console.error("Error while removing user from a group :::", error);
          });
        break;
      }
    }
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
    console.log("User groups :", userGroups);
  }, [isAdded, isDeleted]);

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
                      {showEditButton && (
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={(e) => remove(group._id, scope)}
                          >
                            <FaTimes />
                          </button>
                        </td>
                      )}
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
