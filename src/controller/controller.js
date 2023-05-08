import apiClient from "../api/Api.js";


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


//  get each country's capital
export const getCountryCapital = async (req, res) => {

    try {
        const { sCountryISOCode } = req.body
        const headers = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await apiClient.post('/CapitalCity', { sCountryISOCode }, headers)


        let data = {
            capital: response.data
        };

        return res.status(200).json({
            message: 'Country capital Retrived Successfully',
            data
        });


    } catch (error) {
        console.error(error)
        res.status(404).json({
            Error: 'Country not found'
        })
    }
}


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



