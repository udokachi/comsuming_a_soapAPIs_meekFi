import express from "express";
import getAllCountries from  "../controller/controller.js";
import getAllCountryByName from "../controller/controller.js";

const countryRoutes = express.Router();

countryRoutes.get("/country", getAllCountries);
countryRoutes.post("/name", getAllCountryByName);

export default countryRoutes;
