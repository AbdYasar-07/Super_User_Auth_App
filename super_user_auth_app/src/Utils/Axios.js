import axios from "axios";

const Axios = async (url, method = "get", data = null, token = null) => {
  try {
    const headers = {};
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await axios.request({
      method: method,
      url: url,
      data: data,
      headers: headers,
    });

    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default Axios;
