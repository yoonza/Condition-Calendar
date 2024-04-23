// localhost 5001번으로 axios 데이터 요청 
import axios from "axios";

const getAxios = axios.create({
  baseURL: "http://localhost:5001/conditions",
});

export default getAxios; 