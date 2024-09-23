import axios from "axios";

const apiSeries = axios.create({
    baseURL: 'http://localhost:5000'
}) 
    
export default apiSeries;