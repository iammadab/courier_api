const { createValidator } = require("../../lib/validator")
const Shipment = require("./shipment_model")

const createShipmentValidator = createValidator("destination.string, distance.number, parcels.array")

function createShipmentRoute(req, res){

	createShipmentValidator(req.body)
		.catch(sendBadRequestError)
		.then(createShipment)
		.then(populateShipment)
		.then(createSuccessResponse)
		.then(sendSuccessResponse)
		.catch(res.sendError)

	function sendBadRequestError(errors){
		res.sendError(400, "BAD_REQUEST_BODY", errors)
	}

	function createShipment(){
		return createShipmentFn(req.body)
	}

	function populateShipment(shipment){
		return shipment.populate("parcels")
	}

	function createSuccessResponse(shipment){
		return {
			code: 200,
			message: "Shipment created successfully",
			shipment: shipment
		}
	}

	function sendSuccessResponse(response){
		res.status(200).json(response)
	}
}

function createShipmentFn({ destination, distance, parcels }){
	let newShipment = new Shipment({
		destination: destination,
		distance: distance,
		parcels: parcels
	})

	return newShipment.save()
}

module.exports = {
	fn: createShipmentFn,
	route: createShipmentRoute
}