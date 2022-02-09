const express = require('express');
const bodyParser = require('body-parser');
const productHandler = require('./routes/productHandler');
const userHandler = require('./routes/userHandler');
const cors = require('cors');
const mongoose = require('mongoose');


//const url = 'mongodb+srv://aiturbec:Uxsdce863774@cluster0.qoisj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

//mongoose.connect('mongodb+srv://aiturbec:Uxsdce863774@cluster0.qoisj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
const mongoURI = "mongodb+srv://aiturbec:Uxsdce1909@cluster0.qoisj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(mongoURI, {
useNewUrlParser: true,
useUnifiedTopology: true,
});


const app = express();



app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/products', productHandler);
app.use('/users', userHandler);
app.use(cors());
app.use(express.json());



const PORT = process.env.PORT || 41341; //routing backend
app.listen(PORT, () =>{
    console.log(`server is running on port: ${PORT}`);
});





