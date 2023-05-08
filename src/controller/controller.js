
import Formatter from "../utils/utils.js";
import apiClient from "../api/Api.js"; // Any API Client implementation. Can be axios
import Parser from "../parser/parser.js";
import axios from "axios";

const url = `http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso`;

//get all countries 
 export const getAllCountry = async(req, res)=> {
    try {
      const headers = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let remoteResponse = await apiClient.post('/ListOfCountryNamesByName', headers)
      let result = remoteResponse.data
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
  
 
export const getCountryCapital = async (req, res) => {

    try {
        const {sCountryISOCode} = req.body
        const headers = {
            headers: {
              "Content-Type": "application/json",
            },
          };
        const response = await apiClient.post('/CapitalCity', {sCountryISOCode}, headers)


        let data = {
            capital: response.data
          };
          
          return res.status(200).json({
            message: 'Country capital',
            data
          });

       
    } catch (error) {
        console.error(error)
        console.log(console.log(">>>>>>>>>>>>>>>>>", error.message))
        res.status(404).json({
            Error: 'Country not found'
        })
    }
}


  export default getAllCountry;
  


  