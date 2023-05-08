import apiClient from "../api/Api.js";
import {parseString} from 'xml2js';
import axios from "axios";


//get all countries 
export const getAllCountry = async (req, res) => {
    try {
        const headers = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        let remoteResponse = await apiClient.post('/ListOfCountryNamesByName', headers)
        let result = remoteResponse.data
        return res.status(201).json({
            message: 'list of country Retrived Successfully',
            result,
        });


    } catch (err) {
        throw new Error(
            `Oops something went wrong ${JSON.stringify(
                err
            )}`
        );
    }
}


export const getCountryCapital = async (req, res) => {
    const { sCountryISOCode } = req.body; // Call the CapitalCity SOAP API using axios 
    try {
        const response = await axios.post(
            'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso',
            ` 
                <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://www.oorsprong.org/websamples.countryinfo"> 
                    <soapenv:Header/> 
                    <soapenv:Body> 
                        <web:CapitalCity> 
                            <web:sCountryISOCode>${sCountryISOCode}</web:sCountryISOCode> 
                        </web:CapitalCity> 
                    </soapenv:Body> 
                </soapenv:Envelope> 
            `, {
            headers: { 'Content-Type': 'text/xml' }
        }
        ); // Extract the capital city from the SOAP response 
        const xmlResponse = response.data;
        parseString(xmlResponse, function (err, result) {
            if (err) {
                console.error(err); res.status(500).json({ error: 'Internal server error' });
            } else {
                const capital = result['soap:Envelope']['soap:Body'][0]['m:CapitalCityResponse'][0]['m:CapitalCityResult'][0];
                res.status(200).json({ capital });
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};



//  get each country's currency
export const getCountryCurrency = async (req, res) => {

    try {
        const { sCountryISOCode } = req.body
        const headers = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await apiClient.post('/CountryCurrency', { sCountryISOCode }, headers)


        let data = {
            capital: response.data
        };

        return res.status(200).json({
            message: 'Country Currency Retrived Successfully',
            data
        });


    } catch (error) {
        console.error(error)
        res.status(404).json({
            Error: 'Country not found'
        })
    }
}


//  get each country's flag
export const getCountryFlag = async (req, res) => {

    try {
        const { sCountryISOCode } = req.body
        const headers = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await apiClient.post('/CountryFlag', { sCountryISOCode }, headers)


        let data = {
            capital: response.data
        };

        return res.status(200).json({
            message: 'Country Flag Retrived Successfully',
            data
        });


    } catch (error) {
        console.error(error)
        res.status(404).json({
            Error: 'Country not found'
        })
    }
}


//  get each country's International phone code
export const getCountryIntPhoneCode = async (req, res) => {

    try {
        const { sCountryISOCode } = req.body
        const headers = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await apiClient.post('/CountryIntPhoneCode', { sCountryISOCode }, headers)


        let data = {
            capital: response.data
        };

        return res.status(200).json({
            message: 'Country International Phone Code Retrived Successfully',
            data
        });


    } catch (error) {
        console.error(error)
        res.status(404).json({
            Error: 'Country not found'
        })
    }
}
export default getAllCountry;



