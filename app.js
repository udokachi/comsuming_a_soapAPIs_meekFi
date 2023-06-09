import express from "express"
import morgan from "morgan"
import cors from "cors"
import countryRoutes from "./src/routes/countryRoutes.js"


const createServer = () => {
    const app = express()

    app.use(express.json())
        .use(cors())
        .use(morgan('tiny'))
        .use("/api", countryRoutes);


    return app
}
console.log("ChiServer")
export default createServer