import express from "express"
import morgan from "morgan"
import cors from "cors"
import helmet from "helmet"
// import v1 from "./v1/v1.js"


const createServer = () => {
    const app = express()

    app.use(express.json())
        .use(cors())
        .use(morgan('tiny'))
        .use(helmet());
        // .use("/api", routes);


    return app
}
console.log("ChiServer")
export default createServer