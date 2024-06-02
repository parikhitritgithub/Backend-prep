import mongoose from "mongoose";
import { DB_NAME } from "../src/constants.js";


const connectDB = async () => {
    try {

        const parikhit = await mongoose.connect ( `${process.env.MONGODB_URL}/${DB_NAME}`) 
        console.log(`mongo connectes ${parikhit.connection.host}`);
        
    } catch (error) {
        console.log("MONGO DB connection error " , error );
        process.exit(1);
        
    }
}

export default connectDB ;