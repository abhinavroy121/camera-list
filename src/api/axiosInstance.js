import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://hiring-assignment.wobot.ai/api/v1/",
    headers: {
        Authorization: `Bearer 4ApVMIn5sTxeW7GQ5VWeWiy`,
        "Content-Type": "application/json"    
    }

})

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;