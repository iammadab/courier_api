const express = require("express")
const parcelRouter = express.Router()

//Import parcel functionalities
const createParcel = require("./parcel_create")

parcelRouter.post("/", createParcel)

module.exports = parcelRouter