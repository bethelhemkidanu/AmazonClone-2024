import axios from "axios";

const axiosInstance = axios.create({
  // local instance of firebase functions
  // baseURL: "http://127.0.0.1:5001/clone-d33c0/us-central1/api",
  // backend deployment on render.com
  baseURL: "https://amazon-api-deploy-znfa.onrender.com/",
});

export {axiosInstance} 