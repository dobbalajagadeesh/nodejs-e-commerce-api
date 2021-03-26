const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

require('dotenv/config');

const api = process.env.API_URL;

//middlewares
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.get(`${api}/products`, (req, res)=>{
    res.send('API Works');
})

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
