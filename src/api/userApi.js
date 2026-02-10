import axiosInstance from "./axiosInstance";

export const getList = async () => {
    const response = await axiosInstance.get("fetch/cameras");
    return response;
}

export const updateStatus = async (payload) => {
    const response = await axiosInstance.post("update/camera/status", payload);
    return response;
}