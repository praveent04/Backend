import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()






















/*
import mongoose from "mongoose"
import { DB_NAME } from "./constants";
import connectDB from "./db";
## Approach 1 of connecting database -> direct in index.js file

import express from "express";
const app = express()
;(async () => {
    try {
       await mongoose.connect(`${process.env.MONGODB_URL}`)
       app.on("error", (error) =>{
            console.log("ERROR ", error);
            throw error
       })

       app.listen(process.env.PORT,() =>{
        console.log(`App is listening on port ${process.env.PORT}`)
       })
    } catch (error) {
        console.log("ERROR:", error)
        throw error
    }
})()
    */