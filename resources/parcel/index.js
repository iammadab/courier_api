const express = require("express")
const parcelRouter = express.Router()

parcelRouter.get("/", function(req, res, next){
	console.log("Welcome to the parcel router")
})

module.exports = parcelRouter