import { axiosInstance } from "../services/axios";

export const validateToken = async () => {
    console.log("validateToken")
    let postData = {
        token: localStorage.getItem('token')
    }

    await axiosInstance.post('user/token/verify/', postData, {
        headers: { 'Content-Type': 'application/json' }
    })
        .then(async (result) => {
            console.log(result.data);
            if (result.detail === "Token is invalid or expired") {
                await refreshToken();
            }
        })
        .catch(async (err) => {
            console.log("error post");
            if (err.response.data.detail === "Token is invalid or expired") {
                await refreshToken();
            }
        })
}

export const refreshToken = async () => {
    console.log("refreshToken")
    console.log(localStorage.getItem('refresh'))
    let postData = {
        refresh: localStorage.getItem('refresh')
    }
    await axiosInstance.post('user/token/refresh/', postData, {
        headers: { 'Content-Type': 'application/json' }
    })
        .then((result) => {
            console.log(result.data);
            if (result.detail === "Token is invalid or expired") {
                alert("Access/Token no válido")
            } else {
                localStorage.setItem('token', result.data.access)
            }
        })
        .catch((err) => { console.log(err); })
}