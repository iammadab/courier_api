const mongoose = require("mongoose")

const shipmentSchema = mongoose.Schema({
	destination: { type: String, required: true },
	distance: { type: Number, required: true }, 
	parcels: [{ type: mongoose.Schema.Types.ObjectId, ref: "Parcel" }]
})

const shipmentModel = mongoose.model("Shipment", shipmentSchema)

module.exports = shipmentModel