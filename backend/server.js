import dotenv from "dotenv";
dotenv.config();
import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js';
import foodrouter from './routes/foodroutes.js';
import userRouter from './routes/userroutes.js';
import cartRuoter from './routes/cartroutes.js';
import orderrouter from './routes/orderroutes.js';


//app config
    
const app =express();
const port = 3000;

// middleware
app.use(express.json())   //whenever we get the request from frontend to backend it will be parsed through json
app.use(cors()); // to allow cross origin request     or     we can access the backend from any frontend 
app.use(express.urlencoded({ extended: true }));


//db connection
connectDB();

//api endpoint 
app.use('/api/food',foodrouter);
app.use("/images",express.static("uploads"))

app.use('/api/user',userRouter);
app.use('/api/cart',cartRuoter);
app.use('/api/order',orderrouter)

app.get('/',(req,res)=>{
    res.send("API Working")
})

app.listen(port , ()=>{
    console.log(`server is running on http://localhost:${port}...`)
})

