const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 3000

const app = express();
const corsoption = {
    origin: 'http://localhost:3001/'
}


app.use(cors(corsoption)); // a Connect/Express middleware that can be used to enable CORS
app.use(bodyParser.json()); // parse requests of content-type - application/json
app.use(bodyParser.urlencoded({ extended: true })); // parse requests of content-type - application/x-www-form-urlencoded


app.get('/', (req, res) =>{

    /*
    The res.json() function sends a JSON response. This method sends a response (with the correct content-type) that is the parameter converted to a JSON string using the JSON.stringify() method.
    */

    res.json({message: "First EXPRESS APP"});
})


app.listen(port, ()=> console.log(`Server started at ${port}`));

