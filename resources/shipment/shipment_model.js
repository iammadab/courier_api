const mongoose = require("mongoose")

const shipmentSchema = mongoose.Schema({
	parcels: [{ type: mongoose.Schema.Types.ObjectId, ref: "Parcel" }]
})

const shipmentModel = mongoose.model("Shipment", shipmentSchema)

module.exports = shipmentModel