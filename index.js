const express=require('express');
const app=express();
require('dotenv').config();
const path=require('path');
const mongoose=require('mongoose');
const router=require('./routes/route.js');
const PORT=process.env.PORT || 8080;

//connection
mongoose.connect('mongodb://127.0.0.1:27017/userfield')
.then(()=>console.log('mongoose is connected'))
.catch((err)=>console.log(err));

//middlware
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//setup ejs
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//static files
app.use(express.static(path.join(__dirname,'public')));

//routes connection
app.use('/api',router);

app.listen(PORT,()=>console.log(`listening to the port http://localhost:${PORT}/api/create`));