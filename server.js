//////////////////////
// Dependencies
//////////////////////

const express = require("express")
const cors = require("cors")

/////////////////////
// Import Json Files
////////////////////

const projects = require("./projects.json")
const about = require("./about.json")

/////////////////////////
// App Object
/////////////////////////

const app = express()

/////////////////////////
// Middleware
////////////////////////

app.use(cors())

/////////////////////
// Routes
/////////////////////

// Home Route
app.get("/", (req, res) => {
    res.send("Hello World")
})


// Project Route
app.get("/projects", (req, res) => {
    // render json data
    res.json(projects)
})

// About Route
app.get("/about", (req, res) => {
    // render json data
    res.json(about)
})

/////////////////////
// Listener
////////////////////
app.listen(4000, () => console.log("Listening on port 4000"))