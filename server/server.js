const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const conntect = require('./database/connection');


const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by');


const port  = 8080;


app.get('/', (req,res)=>{
    res.status(200).json("Home Get Request");
});


conntect().then(()=>{
    // start server only when we have valid db connection
app.listen(port, ()=>{
    console.log(`Server connected to http://localhost/${port}`);
});
})

