import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso",
    
})

export default apiClient