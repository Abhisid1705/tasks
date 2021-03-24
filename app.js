const path = require('path');

const express =require('express');

const mongoose=require('mongoose');

const bodyParser = require('body-parser');

const homeRoute=require('./routes/auth');
const itemRoutes=require('./routes/item');
const orderRoutes=require('./routes/order');
const vehicleRoutes=require('./routes/vehicle');
const errorController = require('./controller/error');
 
const app = express();

app.set('view engine','ejs');

app.set('views','views');

app.use(express.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));

app.use(homeRoute);

app.use(itemRoutes);

app.use(orderRoutes);

app.use(vehicleRoutes);

app.use(errorController.get404);

app.use((error,req,res,next)=>{
    return res.redirect('/500')
})
app.get('/500',errorController.get500);


// mongoose
//   .connect(
//     'dbConnection',
//      {useNewUrlParser: true, useUnifiedTopology: true}

//   )
//   .then(result => {
    app.listen(9000);
//     console.log("listening");
//   })
//   .catch(err => {
    // next(err);
//   });