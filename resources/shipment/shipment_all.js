const Shipment = require("./shipment_model")

function fetchAllShipmentRoute(req, res){
	
	fetchAllShipmentFn()
		.then(createSuccessResponse)
		.then(sendSuccessResponse)

	function createSuccessResponse(shipments){
		return {
			code: 200,
			message: "Fetched all shipments successfully",
			shipments: shipments
		}
	}

	function sendSuccessResponse(response){
		res.status(200).json(response)
	}
}

function fetchAllShipmentFn(){
	return Shipment.find({})
				   .populate("parcels")
}

module.exports = {
	fn: fetchAllShipmentFn,
	route: fetchAllShipmentRoute
}