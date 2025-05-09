import axios from "axios";

const aiAxios = axios.create({
    baseURL: 'http://34.64.210.130/',
});

aiAxios.interceptors.request.use(
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

export default aiAxios;
