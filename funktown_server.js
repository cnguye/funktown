const express = require("express");
const cors = require("cors");
const os = require("os");
const app = express();
app.use(cors());
require("dotenv").config({ path: os.homedir() + "/.env" });

const port = process.env.SITE_PORT || 5001;
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// This displays message that the server running and listening to specified port
app.listen(port, () => {
    console.log(`server running on port ${port} `);
});

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", `${process.env.PITIM_URL}`);
    next();
});

// create a GET route
app.get("/express_backend", (req, res) => {
    res.set("Content-Type", "text/html");
    res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT FROM DB_API" });
});
