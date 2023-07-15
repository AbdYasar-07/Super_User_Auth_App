import React, { useState, useEffect } from "react";
import Axios from "../Utils/Axios";
import { useParams } from "react-router-dom";

const AppModal = ({
  buttonLabel,
  dialogBoxHeader,
  tableRow,
  DataSource,
  showButton,
  scopes,
  setIsAdded,
  isAdded,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [checkboxData, setCheckboxData] = useState([]);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [GroupsOfUsers, setGroupsOfUsers] = useState([]);
  const { userId } = useParams();
  const resource = process.env.REACT_APP_AUTH_EXT_RESOURCE;

  useEffect(() => {
    // Fetch checkbox data from API
    const fetchData = async () => {
      try {
        const total_groups_response = await Axios(
          resource + "/groups",
          "GET",
          null,
          localStorage.getItem("auth_access_token")
        );
        const total_groups = await total_groups_response.groups;
        await Axios(
          resource + `/users/${userId}/groups`,
          "GET",
          null,
          localStorage.getItem("auth_access_token")
        ).then((response) => {
          console.log("res", response);
          if (response) {
            setGroupsOfUsers(response);
          }
          const rem_groups = total_groups.filter(
            (item) => !response.some((obj) => obj._id === item._id)
          );
          setCheckboxData(rem_groups);
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [showModal, isAdded]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedCheckboxes([]);
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
      await Axios(
        resource + `/users/${userId}/groups`,
        "PATCH",
        selectedCheckboxes,
        localStorage.getItem("auth_access_token")
      )
        .then((response) => {
          setIsAdded(true);
          closeModal();
        })
        .catch((error) => {
          console.error("Error while adding a user to group", error);
        });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      {showButton && (
        <>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@mdo"
            onClick={openModal}
          >
            + {buttonLabel}
          </button>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    {dialogBoxHeader}
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                {checkboxData && checkboxData.length > 0 && (
                  <div class="modal-body">
                    <table>
                      <thead>
                        <tr>
                          {tableRow?.map((tableRow, index) => {
                            return (
                              <>
                                <th key={index}>{tableRow}</th>
                              </>
                            );
                          })}
                        </tr>
                      </thead>
                      <tbody>
                        {checkboxData.map((checkbox) => (
                          <tr key={checkbox._id}>
                            <td>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
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
                                <label htmlFor={checkbox.id}>
                                  {checkbox.name}
                                </label>
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
                )}
                {checkboxData?.length == 0 && <h5>No more {scopes} to add.</h5>}
                <div class="modal-footer">
                  {checkboxData && checkboxData.length > 0 && (
                    <>
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                        onClick={closeModal}
                      >
                        CANCEL
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary"
                        onClick={handleAddUserToGroups}
                      >
                        ADD
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AppModal;
