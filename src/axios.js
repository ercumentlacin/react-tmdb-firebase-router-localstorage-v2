import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/react-ecommerce-aae81/us-central1/api",
});

export default instance;
