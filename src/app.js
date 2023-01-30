import express from "express";
import path from "path";
import configViewEngine from "./config/viewEngine";
import configFirebase from "./config/firebase";
import Router from "./routes";
require("dotenv").config();
const app = express();
const bodyParser = require("body-parser");

const port = process.env.port || 9999;




//* parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//* parse application/json
app.use(bodyParser.json());

//* Use view engine EJS
configViewEngine(app);


Router(app)
app.use(express.static(path.join(__dirname, '/public')));
app.listen(port, () => {
  console.log(`Example app listening on port: http://localhost:${port}`);
});