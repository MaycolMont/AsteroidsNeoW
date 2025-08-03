import axios from "axios"

const apiService = axios.create({
    baseURL: "https://api.nasa.gov/neo/rest/v1/",
})

const API_KEY : string = "a6wU4kgjm4bsJxBndbugsr20jhzzcAtqU17HZ9Dj";

apiService.interceptors.request.use((request) => {
    request.params = request.params || {};
    request.params['api_key'] = API_KEY;
    console.log("Interceptor de solicitud", request);
    return request;
    // mostrar mensaje de interceptor funcional
}, (error) => {
    console.error("Error en el interceptor de solicitud", error);
    return Promise.reject(error);
    
});

export default apiService;