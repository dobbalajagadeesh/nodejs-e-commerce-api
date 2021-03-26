const express = require('express');
const bodyParser = require('body-parser');
const app = express();

require('dotenv/config');

const api = process.env.API_URL;

//middlewares
app.use(bodyParser.json());

app.get(`${api}/products`, (req, res)=>{
    res.send('API Works');
})
app.listen(3000, ()=>{
    console.log('Server running on port 3000');
})
