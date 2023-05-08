import express from "express";
import getAllCountry, { getCountryCapital, getCountryCurrency, getCountryFlag, getCountryIntPhoneCode } from "../controller/controller.js";

const countryRoutes = express.Router();

countryRoutes.post("/name", getAllCountry);
countryRoutes.post("/capital", getCountryCapital);
countryRoutes.post("/currency", getCountryCurrency);
countryRoutes.post("/flag", getCountryFlag);
countryRoutes.post("/phncode", getCountryIntPhoneCode);

export default countryRoutes;
