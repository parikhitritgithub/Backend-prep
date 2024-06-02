import dotenv from "dotenv" ;
import connectDB from "../db/index.js"; 



dotenv.config({
    path:'./env'
})



connectDB()
.then( () => {
    app.on("error" , () => {
        console.log (`apllication not able to talk`) ;
    }) 

    app.listen(process.env.PORT|| 8000 , () => {
        console.log (`server is runnning  at port : ${process.env.PORT}`) ;
    });
}) 
.catch((err) => {
    console.log("mongodb connection failled " , err ) ;
})
// import express from express  ; 
// const  app = express() ;

// function connectionDB() {} 
// connectionDB() // old approach  

// iffy approach with async 
//;  for cleaning purpose not mandatory 

/*
 ;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error", () => {
            console.log("application not able to talk");
        })


        app.listen(process.env.PORT , () => {
            console.log(`app is list ${process.env.PORT}`);
        })
        
    } catch (error) {
        console.error("Error :" , error )
        
    }
 })() ;

 */ 


 