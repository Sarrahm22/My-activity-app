const express=require('express');

const app=express();
const mongoose = require('mongoose');
const bodyParser=require('body-parser');

const routerActivity=require('./router/activity');
mongoose.connect('mongodb+srv://design:lovehate22@acitivityapi.zwdbo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(() => 
console.log("base connected"))
.catch((err) => console.log(err));
app.use(bodyParser.json());
app.use('/api/activity/',routerActivity);


module.express=app;