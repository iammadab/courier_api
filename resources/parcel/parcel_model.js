const mongoose = require("mongoose")

const parcelSchema = mongoose.Schema({
	parcelId: { type: Number, required: true },
	weight: { type: Number, required: true }
})

parcelSchema.statics.nextId = function(){
	return this.find({})
			   .then(getLast)
			   .then(getNextId)

	function getLast(parcels){
		return parcels[parcels.length - 1]
	}

	function getNextId(parcel){
		return parcel.parcelId ? +parcel.parcelId + 1 : 1
	}
}

const parcelModel = mongoose.model("Parcel", parcelSchema)

module.exports = parcelModel