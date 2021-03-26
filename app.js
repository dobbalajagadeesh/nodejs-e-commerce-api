const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

require('dotenv/config');

const api = process.env.API_URL;
const productRouter = require('./routes/products');

//middlewares
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.use(`${api}/products`, productRouter)

mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(()=>{
    console.log('Database Connected');
})
.catch((err)=>{
    console.log(err);
});

app.listen(3000, ()=>{
    console.log('Server running on port 3000');
})
