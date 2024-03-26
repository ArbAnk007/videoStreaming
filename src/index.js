import 'dotenv/config'
import dbConnect from './db/index.js';
import { app } from "./app.js"

dbConnect()
.then( () => {
    app.on("error", (error) => {
        console.log(`An error occured while listening: ${error}`);
        throw error
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port ${process.env.PORT || 8000}`)
    })
    app.get( "/", (req, res) => {
        res.json("this is also running")
        console.log(req.baseUrl);
    } )
} )
.catch( (error) => {
    console.log("MongoDB connection error: ", error);
} )