import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-app-eb630.firebaseio.com/",
});

export default instance;
