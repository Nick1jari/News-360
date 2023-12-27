// const mongoose=require('mongoose')
// mongoose.connect('mongodb://127.0.0.1:27017/NewsApp',{})
// const connectToDatabase=()=>{console.log("Connected")}
// module.exports=connectToDatabase


const mongoose=require('mongoose');
const express=require('express');
require('dotenv').config();
const app=express()
const DB=`mongodb+srv://${process.env.REACT_APP_PASSWORD}:${process.env.REACT_APP_USERNAME}@cluster0.snd07.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('Connected');
}).catch((e)=>{
    console.log(e)
})

