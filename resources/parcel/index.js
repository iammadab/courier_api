const express = require("express")
const parcelRouter = express.Router()

//Import parcel functionalities
const createParcel = require("./parcel_create")
const fetchParcel = require("./parcel_fetch")

parcelRouter.get("/:parcelId", fetchParcel.route)
parcelRouter.post("/", createParcel.route)

module.exports = parcelRouter