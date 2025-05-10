import axios from "axios";

const aiAxios2 = axios.create({
    baseURL: 'https://travel-recommend-api-98044284658.asia-northeast3.run.app',
});

aiAxios2.interceptors.request.use(
    (config) => {
        const csrftoken = localStorage.getItem('csrftoken');
        if (csrftoken) {
            config.headers["Authorization"] = `Bearer ${csrftoken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default aiAxios2;
