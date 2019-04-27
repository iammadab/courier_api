const express = require("express")
const app = express()

const PORT = process.env.PORT || 3000

//Import routers
const Parcel = require("./resources/parcel")

//Attack the routers to routes
app.use("/api/parcel", Parcel)

app.listen(PORT, () => {
	console.log("Application listening at port " + PORT)
})