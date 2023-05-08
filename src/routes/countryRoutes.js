import express from "express";
import getAllCountry, {getCountryCapital, getCountryCurrency } from "../controller/controller.js";

const countryRoutes = express.Router();

countryRoutes.post("/name", getAllCountry);
countryRoutes.post("/capital", getCountryCapital); 
countryRoutes.post("/currency",getCountryCurrency);

export default countryRoutes;
