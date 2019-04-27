const Shipment = require("./shipment_model")

function fetchAllShipmentFn(){
	return Shipment.find({})
				   .populate("parcels")
}

function fetchAllShipmentRoute(req, res){
	fetchAllShipmentFn()
		.then(createSuccessResponse)
		.then(response => res.status(200).json(response))

	function createSuccessResponse(shipments){
		return {
			code: 200,
			message: "Fetched all shipments successfully",
			shipments: shipments
		}
	}
}

module.exports = {
	fn: fetchAllShipmentFn,
	route: fetchAllShipmentRoute
}