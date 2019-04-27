const express = require("express")
const lazyError = require("lazy-error")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express(),
      PORT = process.env.PORT || 3000

//Add middlewares
app.use(cors())
app.use(bodyParser.json())
app.use(lazyError())

//Connect to mongodb
if(!process.env.PORT)
	mongoose.connect("mongodb://localhost/courier", { useNewUrlParser: true })
		    .then(() => { console.log("Connected to db") })
		    .catch(err => { console.log("Error connecting to db", err) })
else
	mongoose.connect("mongodb+srv://Wisdom:DShX5RERA6OTTG0O@cluster0-zh4ss.mongodb.net/courier?retryWrites=true", {
		useNewUrlParser: true
	})
	.then(() => { console.log("Connected to online db") })
	.catch(err => { console.log("Error connection to online db" , err)});


//Import routers
const Parcel = require("./resources/parcel")
const Shipment = require("./resources/shipment")

//Attack the routers to routes
app.use("/api/parcels", Parcel)
app.use("/api/shipments", Shipment)

app.listen(PORT, () => {
	console.log("Application listening at port " + PORT)
})