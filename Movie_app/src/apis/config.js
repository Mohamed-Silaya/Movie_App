import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "7770c7457a5d7ebb34d378549071963f"
    }
});

export const axiosImages = axios.create({
    baseURL: "https://image.tmdb.org/t/p/w500",
    params: {
        api_key: "7770c7457a5d7ebb34d378549071963f"
    }
});


export const fetchData = async (endpoint) => {
    try {
        const response = await axiosInstance.get(endpoint);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; }
};

export const fetchImage = async (imagePath) => {
    try {
        const imageUrl = await axiosImages.get(imagePath);
        return imageUrl.config.url; 
    } catch (error) {
        console.error("Error fetching image:", error);
        throw error;
    }
};
