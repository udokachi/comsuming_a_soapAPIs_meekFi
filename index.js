
import createServer from "./app.js";

import dotenv from 'dotenv'
dotenv.config();

const Port = process.env.PORT || 4000;

const app = createServer();

app.listen(Port, () => {
    console.log(`Server running at http://localhost:${Port}`)
});

app.get('/', (req, res)=>{
    res.send('welcome to soap service')
})