import React, { useState, useEffect } from "react";
import Axios from "../Utils/Axios";
import { useParams } from "react-router-dom";
//import apiUtils from './apiUtils';

const ModalDialog = () => {
  const [showModal, setShowModal] = useState(false);
  const [checkboxData, setCheckboxData] = useState([]);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [GroupsOfUsers, setGroupsOfUsers] = useState([]);
  const { userId } = useParams();
  useEffect(() => {
    // Fetch checkbox data from API
    const fetchData = async () => {
      try {
        const total_groups_response = await Axios(
          "https://dev-34chvqyi4i2beker.jp.webtask.run/adf6e2f2b84784b57522e3b19dfc9201/api/groups",
          "GET",
          null,
          localStorage.getItem("auth_access_token")
        );
        const total_groups = total_groups_response.groups;
        await Axios(
          "https://dev-34chvqyi4i2beker.jp.webtask.run/adf6e2f2b84784b57522e3b19dfc9201/api/users/auth0|64a7cf2f24a711a5b957671c/groups",
          "GET",
          null,
          localStorage.getItem("auth_access_token")
        ).then((response) => {
          setGroupsOfUsers(response);
          const rem_groups = total_groups.filter(
            (item) => !response.some((obj) => obj._id === item._id)
          );
          setCheckboxData(rem_groups);
        });
        console.log("state", checkboxData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [showModal]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleCheckboxChange = (checkboxId) => {
    const updatedCheckboxes = [...selectedCheckboxes];

    if (updatedCheckboxes.includes(checkboxId)) {
      updatedCheckboxes.splice(updatedCheckboxes.indexOf(checkboxId), 1);
    } else {
      updatedCheckboxes.push(checkboxId);
    }

    setSelectedCheckboxes(updatedCheckboxes);
  };

  const handleAddUserToGroups = async () => {
    try {
      // Make API call to save changes
      const response = await Axios(
        "https://dev-34chvqyi4i2beker.jp.webtask.run/adf6e2f2b84784b57522e3b19dfc9201/api/users/auth0|64a7cf2f24a711a5b957671c/groups",
        "PATCH",
        selectedCheckboxes,
        localStorage.getItem("auth_access_token")
      );

      console.log(response); // Handle the API response as needed

      closeModal(); // Close the modal after successfully saving changes
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteUserToGroups = async (groupId) => {
    try {
      // Make API call to save changes
      const response = await Axios(
        "https://dev-34chvqyi4i2beker.jp.webtask.run/adf6e2f2b84784b57522e3b19dfc9201/api/groups" +
          `/${groupId}` +
          "/members",
        "DELETE",
        [userId],
        localStorage.getItem("auth_access_token")
      );

      console.log(response); // Handle the API response as needed

      closeModal(); // Close the modal after successfully saving changes
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={openModal}>
        + ADD USER TO GROUPS
      </button>
      {showModal && (
        <>
          <table>
            <thead>
              <tr>
                <th>Group Name</th>
              </tr>
            </thead>
            <tbody>
              {/* {groups_of_user.map((g) => (
                            return(
                                    <tr key={g._id}>
                                    <td>
                                        <div>{g.name}</div>
                                    </td>
                                </tr>
                                )
                            ))} */}
              {GroupsOfUsers.map((response) => {
                return (
                  <tr key={response._id}>
                    <td>
                      <div>{response.name}</div>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDeleteUserToGroups(response._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal Heading</h5>
                <button type="button" className="close" onClick={closeModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Add User to one or more groups</p>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {checkboxData.map((checkbox) => (
                      <tr key={checkbox._id}>
                        <td>
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <input
                              type="checkbox"
                              id={checkbox._id}
                              style={{ marginRight: "5px" }}
                              checked={selectedCheckboxes.includes(
                                checkbox._id
                              )}
                              onChange={() =>
                                handleCheckboxChange(checkbox._id)
                              }
                            />
                            <label htmlFor={checkbox.id}>{checkbox.name}</label>
                          </div>
                        </td>
                        <td>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "right",
                              marginLeft: "70px",
                            }}
                          >
                            {checkbox.description}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  CANCEL
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleAddUserToGroups}
                >
                  ADD
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ModalDialog;
