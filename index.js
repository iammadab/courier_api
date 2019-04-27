const express = require("express")
const lazyError = require("lazy-error")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const app = express(),
      PORT = process.env.PORT || 3000

//Add middlewares
app.use(bodyParser.json())
app.use(lazyError())

//Connect to mongodh
mongoose.connect("mongodb://localhost/courier", { useNewUrlParser: true })
	    .then(() => { console.log("Connected to db") })
	    .catch(err => { console.log("Error connecting to db", err) })

//Import routers
const Parcel = require("./resources/parcel")

//Attack the routers to routes
app.use("/api/parcel", Parcel)

app.listen(PORT, () => {
	console.log("Application listening at port " + PORT)
})