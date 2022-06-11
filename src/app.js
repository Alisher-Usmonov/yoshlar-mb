const express = require("express");
const { PORT } = require("../config");
const morgan = require("morgan");
const path = require("path");
const fs = require("fs");

const app = express();

// Settings
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middlewares
app.use(morgan("tiny"));
app.use("/public", express.static(path.join(__dirname, "public")));

fs.readdir(path.join(__dirname, "routes"), (err, files) => {
    if(!err) {
        files.forEach(file => {
            let route = require(path.join(__dirname, "routes", file))
            app.use(route.path, route.router)
        })
    }
})

app.listen(PORT, _ => console.log(`Server is running at port ${PORT}`))