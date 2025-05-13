import axios from "axios";

const aiAxios = axios.create({
    baseURL: 'https://www.ecovel.site',
});

aiAxios.interceptors.request.use(
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

export default aiAxios;
