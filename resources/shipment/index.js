const express = require("express")
const shipmentRouter = express.Router()

//Import parcel functionalities
const fetchAllShipments = require("./shipment_all")
const fetchShipment = require("./shipment_fetch")
const createShipment = require("./shipment_create")

shipmentRouter.get("/", fetchAllShipments.route)
shipmentRouter.get("/:shipmentId", fetchShipment.route)
shipmentRouter.post("/", createShipment.route)

module.exports = shipmentRouter