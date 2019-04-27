const Shipment = require("./shipment_model")
const { createValidator } = require("../../lib/validator")

const fetchShipmentValidator = createValidator("shipmentId.string")

function shipmentFetchFn({ id }){
	return Shipment.find({ _id: id })
				   .populate("parcel")
}

function shipmentFetchRoute(req, res){

	fetchShipmentValidator(req.params)
		.catch(sendBadRequestError)
		.then(() => shipmentFetchFn(req.params))
		.then(createSuccessResponse)
		.then(response => res.status(200).json(response))

	function sendBadRequestError(errors){
		res.sendError(400, "BAD_REQUEST_BODY", errors)
	}

	function createSuccessResponse(shipment){
		return {
			code: 200,
			message: "Fetch shipment successfully",
			shipment: shipment
		}
	}

}


module.exports = {
	fn: shipmentFetchFn,
	route: shipmentFetchRoute
}