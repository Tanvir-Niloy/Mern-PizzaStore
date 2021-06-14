const colors = require('colors')
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Pizza = require('./Model/PizzaModel');
const pizzasRoute = require('./routes/pizzasRoute')


dotenv.config();

const app = express();

app.use(express.json());

//routes

app.use('/api/pizzas',pizzasRoute)

app.get('/',(req,res)=>{

          res.send("Server Working")
})


// Connect to Database
connectDB();



const port = process.env.PORT || 7000;


app.listen(
          port,
          console.log(
            `Server running in ${process.env.NODE_ENV} mode on port ${port}`.underline.bgMagenta
          )
        );