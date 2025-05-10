import axios from "axios";

export const  axiosInstance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    params:{
        api_key:"7770c7457a5d7ebb34d378549071963f"
    }
});
export const axiosImages = axios.create({
    baseURL:"https://image.tmdb.org/t/p/w500",
    params:{
        api_key:"7770c7457a5d7ebb34d378549071963f"
    }
})