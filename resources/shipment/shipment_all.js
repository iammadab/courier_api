const Shipment = require("./shipment_model")

function fetchAllShipmentFn(){
	return Shipment.find({})
}

function fetchAllShipmentRoute(){
	fetchAllShipmentFn()
		.then(createSuccessResponse)

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