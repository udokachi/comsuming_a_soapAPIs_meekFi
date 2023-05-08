
import Formatter from "../utils/utils.js";
import apiClient from "../api/Api.js"; // Any API Client implementation. Can be axios
import Parser from "../parser/parser.js";
import axios from "axios";

const url = `http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso`;

//get all countries 
 export const getAllCountryByName = async(req, res)=> {
    try {
      const headers = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      let args = Formatter.countryByName();
      let remoteResponse = await apiClient.post('/ListOfCountryNamesByName', args, headers)
      let result = remoteResponse.data
      // let remoteResponse = await axios.post(url, args, headers);
      // console.log(result)
      return res.status(201).json({
        message: 'list of country',
        result,
    });
      
  
    } catch (err) {
      // console.log(">>>>>>>>>>>>>>>>>", err.description, err.stack, err.search)
      throw new Error(
        `Oops something went wrong ${JSON.stringify(
          err
        )}`
      );
    }
  }
  
  export default 
    getAllCountryByName
  ;
  

