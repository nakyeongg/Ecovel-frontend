import axios from "axios";

const mainAxios = axios.create({
    baseURL: 'https://backend-app-164286058526.us-central1.run.app',
});

mainAxios.interceptors.request.use(
    (config) => {
        const csrftoken = localStorage.getItem('csrftoken');
        if (csrftoken) {
        config.headers["X-CSRFToken"] = csrftoken;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default mainAxios;
