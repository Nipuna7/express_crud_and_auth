
const express=require('express');
const mongoose=require('mongoose');
require('dotenv').config();
const bodyParser=require('body-parser');

const serverPort=process.env.SERVER_PORT;

//=======================================================================================
const CustomerRoute=require('./route/CustomerRoute');
const UserRoute=require('./route/UserRoute');
//=======================================================================================

const app=express();
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/TestApp');

app.listen(serverPort,()=>{
    console.log(`server up & running on port ${serverPort}`);
});

app.get('/test',(req, res)=>{
    return res.json('server works');
})

app.use('/api/v1/customers',CustomerRoute);
app.use('/api/v1/customers',UserRoute);