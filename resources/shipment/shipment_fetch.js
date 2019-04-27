const lazyError = require("lazy-error")
const Shipment = require("./shipment_model")
const { createValidator } = require("../../lib/validator")

const fetchShipmentValidator = createValidator("shipmentId.string")


function shipmentFetchRoute(req, res){

	fetchShipmentValidator(req.params)
		.catch(sendBadRequestError)
		.then(fetchShipment)
		.then(createSuccessResponse)
		.then(sendSuccessResponse)
		.catch(res.sendError)

	function sendBadRequestError(errors){
		res.sendError(400, "BAD_REQUEST_BODY", errors)
	}

	function fetchShipment(){
		return shipmentFetchFn(req.params)
	}

	function createSuccessResponse(shipment){
		return {
			code: 200,
			message: "Fetch shipment successfully",
			shipment: shipment
		}
	}

	function sendSuccessResponse(response){
		res.status(200).json(response)
	}

}


function shipmentFetchFn({ shipmentId }){
	return Shipment.find({ _id: shipmentId })
				   .populate("parcels")
				   .then(checkForParcels)
				   .catch(handleErrors)

	function checkForParcels(parcels){
		if(parcels.length == 0)
			throw lazyError.createError(404, "SHIPMENT_NOT_FOUND")
		return parcels
	}

	function handleErrors(err){
		if(err.name == "CastError")
			throw lazyError.createError(400, "INVALID_ID")
		throw err
	}
}


module.exports = {
	fn: shipmentFetchFn,
	route: shipmentFetchRoute
}