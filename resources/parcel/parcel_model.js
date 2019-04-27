const mongoose = require("mongoose")

const parcelSchema = mongoose.Schema({
	weight: { type: Number, required: true }
})

const parcelModel = mongoose.model("Parcel", parcelSchema)

module.exports = parcelModel