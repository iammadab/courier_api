const { createValidator } = require("../../lib/validator")
const Shipment = require("./shipment_model")

const createShipmentValidator = createValidator("destination.string, distance.number, parcels.array")

function createShipmentFn({ destination, distance, parcels }){
	let newShipment = new Shipment({
		destination: destination,
		distance: distance,
		parcels: parcels
	})

	return newShipment.save()
}

function createShipmentRoute(req, res){
	createShipmentValidator(req.body)
		.catch(sendBadRequestError)
		.then(() => createShipmentFn(req.body))
		.then(createSuccessResponse)
		.then(response => res.status(200).json(response))

	function sendBadRequestError(errors){
		res.sendError(400, "BAD_REQUEST_BODY", errors)
	}

	function createSuccessResponse(shipment){
		return {
			code: 200,
			message: "Shipment created successfully",
			shipment: shipment
		}
	}
}

module.exports = {
	fn: createShipmentFn,
	route: createShipmentRoute
}