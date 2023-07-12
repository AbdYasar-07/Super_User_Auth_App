import React, { useState, useEffect } from 'react';
import Axios from '../Utils/Axios';
//import apiUtils from './apiUtils';

const ModalDialog = () => {
    const [showModal, setShowModal] = useState(false);
    const [checkboxData, setCheckboxData] = useState([]);

    useEffect(() => {
        // Fetch checkbox data from API
        const fetchData = async () => {
            try {
                const total_groups_response = await Axios('https://dev-34chvqyi4i2beker.jp.webtask.run/adf6e2f2b84784b57522e3b19dfc9201/api/groups',
                    'GET',
                    null,
                    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkNLM1RXYkZRcGFjV1NET3Rxc3VoNSJ9.eyJpc3MiOiJodHRwczovL2Rldi0zNGNodnF5aTRpMmJla2VyLmpwLmF1dGgwLmNvbS8iLCJzdWIiOiJLVHg1cnNqWTRVUXBjYkRrYlJrRkx6YWlVRGxzTk5MREBjbGllbnRzIiwiYXVkIjoidXJuOmF1dGgwLWF1dGh6LWFwaSIsImlhdCI6MTY4OTA5NTc1OSwiZXhwIjoxNjg5MTgyMTU5LCJhenAiOiJLVHg1cnNqWTRVUXBjYkRrYlJrRkx6YWlVRGxzTk5MRCIsInNjb3BlIjoicmVhZDp1c2VycyByZWFkOmFwcGxpY2F0aW9ucyByZWFkOmNvbm5lY3Rpb25zIHJlYWQ6Y29uZmlndXJhdGlvbiByZWFkOmdyb3VwcyByZWFkOnJvbGVzIHJlYWQ6cGVybWlzc2lvbnMgcmVhZDpyZXNvdXJjZS1zZXJ2ZXIiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.q4tKOIiAKLD_LU9EcjYDal7MaTRwz9l4R_-FYjWuDyPfO8MwdWc5yr4cLoA9UYgkHbagSr-EfTRLEU4X1kgV88r7XR4DqHJdLX1x1gPoHZ17lBdOCmiik7J0hoRu1p2AnfHaBFJTJGYgR-lp6PRw-ScnTSsUc3aBq3v_XlaxoOGVJ-PvqkwPocFurQP_GY8jpSVufOVZE7Ds-WNBj5BUJOLI5cFkknR3Ek-bTngyR8LV5lLXvspEIqUvmkSl8aNw31cep9BsdS__GVQDtGc8ZsBFOLtDSZWUlsqbESVDQDGeo-cf-q0RModT-qc2zski7awZoWD-2YP5jDORmUV0EQ'
                );
                const total_groups = total_groups_response.groups;
                const groups_of_user = await Axios('https://dev-34chvqyi4i2beker.jp.webtask.run/adf6e2f2b84784b57522e3b19dfc9201/api/users/auth0|64a7cf2f24a711a5b957671c/groups',
                    'GET',
                    null,
                    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkNLM1RXYkZRcGFjV1NET3Rxc3VoNSJ9.eyJpc3MiOiJodHRwczovL2Rldi0zNGNodnF5aTRpMmJla2VyLmpwLmF1dGgwLmNvbS8iLCJzdWIiOiJLVHg1cnNqWTRVUXBjYkRrYlJrRkx6YWlVRGxzTk5MREBjbGllbnRzIiwiYXVkIjoidXJuOmF1dGgwLWF1dGh6LWFwaSIsImlhdCI6MTY4OTA5NTc1OSwiZXhwIjoxNjg5MTgyMTU5LCJhenAiOiJLVHg1cnNqWTRVUXBjYkRrYlJrRkx6YWlVRGxzTk5MRCIsInNjb3BlIjoicmVhZDp1c2VycyByZWFkOmFwcGxpY2F0aW9ucyByZWFkOmNvbm5lY3Rpb25zIHJlYWQ6Y29uZmlndXJhdGlvbiByZWFkOmdyb3VwcyByZWFkOnJvbGVzIHJlYWQ6cGVybWlzc2lvbnMgcmVhZDpyZXNvdXJjZS1zZXJ2ZXIiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.q4tKOIiAKLD_LU9EcjYDal7MaTRwz9l4R_-FYjWuDyPfO8MwdWc5yr4cLoA9UYgkHbagSr-EfTRLEU4X1kgV88r7XR4DqHJdLX1x1gPoHZ17lBdOCmiik7J0hoRu1p2AnfHaBFJTJGYgR-lp6PRw-ScnTSsUc3aBq3v_XlaxoOGVJ-PvqkwPocFurQP_GY8jpSVufOVZE7Ds-WNBj5BUJOLI5cFkknR3Ek-bTngyR8LV5lLXvspEIqUvmkSl8aNw31cep9BsdS__GVQDtGc8ZsBFOLtDSZWUlsqbESVDQDGeo-cf-q0RModT-qc2zski7awZoWD-2YP5jDORmUV0EQ'
                );
                const rem_groups = total_groups.filter(item => !groups_of_user.some(obj => obj._id === item._id));
                setCheckboxData(rem_groups);
                console.log('res', total_groups_response);
                console.log('state', checkboxData);
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

    return (
        <div>
            <button className="btn btn-primary" onClick={openModal}>
                + ADD USER TO GROUPS
            </button>
            {showModal && (
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
                            {/* <ul>
                                {checkboxData.map((checkbox) => (
                                    <li key={checkbox._id} style={{marginLeft: '1px'}}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <input type="checkbox" id={checkbox._id} />
                                        <label htmlFor={checkbox._id}>{checkbox.name}</label>
                                        <div style={{ marginLeft: '10px' }}>- {checkbox.description}</div>
                                        </div>
                                        
                                    </li>
                                ))}
                            </ul> */}
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {checkboxData.map((checkbox) => (
                                        <tr key={checkbox.id}>
                                            <td>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <input type="checkbox" id={checkbox.id} style={{ marginRight: '5px' }} />
                                                    <label htmlFor={checkbox.id}>{checkbox.name}</label>
                                                </div>
                                            </td>
                                            <td>
                                                <div style={{ display: 'flex', alignItems: 'right', marginLeft: '70px' }}>{checkbox.description}</div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={closeModal}>
                                CANCEL
                            </button>
                            <button type="button" className="btn btn-primary">
                                ADD
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {/* {showModal && (
        // <div className="modal" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal Heading</h5>
                <button type="button" className="close" onClick={closeModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Modal body text goes here.</p>
                <ul>
                  {checkboxData.length > 0 && checkboxData.map((checkbox) => (
                    <li key={checkbox.id}>
                      <input type="checkbox" id={checkbox.id} />
                      <label htmlFor={checkbox.id}>{checkbox.label}</label>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        // </div>
      )} */}
        </div>
    );
};

export default ModalDialog;
