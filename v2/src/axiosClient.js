import axios from 'axios'

let url = 'http://127.0.0.1:8000/api'
let version = 'v1'

const axiosClient = axios.create({
    baseURL: `${url}/${version}/`,
});
export default axiosClient;