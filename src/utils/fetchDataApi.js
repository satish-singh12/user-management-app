import axios from "axios";

// Base URL for the API
const baseURL = "https://jsonplaceholder.typicode.com/users";

// API call function
const apiCall = async (method, url, data = null) => {
  try {
    const response = await axios({ method, url, data });
    return response;
  } catch (error) {
    console.error(`API ${method.toUpperCase()} error:`, error);
    throw error;
  }
};

// API functions
export const getDataApi = () => apiCall("get", baseURL);
export const postDataApi = (formData) => apiCall("post", baseURL, formData);
export const putDataApi = (formData) =>
  apiCall("put", `${baseURL}/${formData.id}`, formData);
export const deleteDataApi = (id) => apiCall("delete", `${baseURL}/${id}`);
