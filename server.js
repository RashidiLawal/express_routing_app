const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}));

const route = require("./router");


app.use('/api', route);

const port = 3000;

//home route
app.get('/', (req, res)=> (res.end('Routing App')))

app.listen(port, ()=>{console.log(('Express server currently running on http://localhost:3000'))})