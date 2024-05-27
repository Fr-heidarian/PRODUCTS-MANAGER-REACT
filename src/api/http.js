import { BASE_URL } from "./api";
import axios from "axios";


axios.defaults.baseURL = BASE_URL;
export default axios;
