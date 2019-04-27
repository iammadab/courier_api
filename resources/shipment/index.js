const express = require("express")
const shipmentRouter = express.Router()

//Import parcel functionalities
const createShipment = require("./shipment_create")

shipmentRouter.post("/", createShipment.route)

module.exports = shipmentRouter