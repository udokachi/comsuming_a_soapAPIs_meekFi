import express from "express";
import getAllCountry, {getCountryCapital} from "../controller/controller.js";

const countryRoutes = express.Router();

countryRoutes.post("/name", getAllCountry);
countryRoutes.post("/capital", getCountryCapital); 

export default countryRoutes;
