import React from "react";
import { useState, useEffect } from "react";
import Axios from "../Utils/Axios";
import Pagination from "../Utils/Pagination";
import { useAuth0 } from "@auth0/auth0-react";

const ContentBody = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const { getAccessTokenSilently } = useAuth0();
  const resource = process.env.REACT_APP_AUTH_EXT_RESOURCE;

  const fetchAccessToken = () => {
    getAccessTokenSilently()
      .then((response) => {
        localStorage.setItem("access_token", response);
      })
      .catch((error) => {
        console.error("Error while fetching token", error);
      });
  };

  const formatTimestamp = (timestamp) => {
    if (!timestamp) {
      return "Never";
    }
    const date = new Date(timestamp);
    const now = new Date();

    const diffInMilliseconds = Math.abs(now - date);
    const diffInSeconds = Math.floor(diffInMilliseconds / 1000);

    if (diffInSeconds < 60) {
      return `${diffInSeconds} seconds ago`;
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
      return `${diffInMinutes} minutes ago`;
    }

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
      return `${diffInHours} hours ago`;
    }

    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays} days ago`;
  };

  const fetchAuthorizationToken = () => {
    const body = {
      grant_type: process.env.REACT_APP_AUTH_GRANT_TYPE,
      client_id: process.env.REACT_APP_M2M_CLIENT_ID,
      client_secret: process.env.REACT_APP_M2M_CLIENT_SECRET,
      audience: process.env.REACT_APP_M2M_AUDIENCE,
    };
    if (localStorage.getItem("access_token").length > 0) {
      const authorizationResponse = Axios(
        "https://dev-34chvqyi4i2beker.jp.auth0.com/oauth/token",
        "POST",
        body,
        null
      );
      authorizationResponse
        .then((tkn) => {
          console.log("authz access token", tkn);
          localStorage.setItem("auth_access_token", tkn.access_token);
        })
        .catch((error) =>
          console.error("Error while fetching authorization token ::", error)
        );
    }
  };

  const authExtensionApi = (url, method, body, token) => {
    const response = Axios(resource + `/${url}`, method, body, token);
    response
      .then((data) => {
        console.log("data ::", data);
        setData(data.users);
      })
      .catch((error) => {
        console.error(
          "Error while accessing authorization resource :::",
          error
        );
      });
  };

  useEffect(() => {
    const fetchData = () => {
      try {
        fetchAccessToken();
        fetchAuthorizationToken();
        authExtensionApi(
          "users",
          "GET",
          null,
          localStorage.getItem("auth_access_token")
        );
      } catch (error) {
        console.error("error ::", error);
      }
    };
    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div className="container">
        {" "}
        <hr />
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Last Login</th>
              <th>Logins</th>
              <th>Connection</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.user_id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{formatTimestamp(item.last_login)}</td>
                <td>{item.logins_count}</td>
                <td>{item.identities[0].connection}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="paginator">
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(data.length / itemsPerPage)}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ContentBody;
