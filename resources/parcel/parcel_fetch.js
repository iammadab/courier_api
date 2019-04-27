const { createValidator } = require("../../lib/validator")
const Parcel = require("./parcel_model")

const fetchParcelValidator = createValidator("parcelId.string")

function fetchParcelRoute(req, res){

	fetchParcelValidator(req.params)
		.catch(sendBadRequestError)
		.then(fetchParcel)
		.then(createSuccessResponse)
		.then(sendSuccessResponse)

	function sendBadRequestError(errors){
		res.sendError(400, "BAD_REQUEST_BODY", errors)
	}

	function fetchParcel(){
		return fetchParcelFn(req.params)
	}

	function createSuccessResponse(parcel){
		return {
			code: 200,
			message: "Fetched parcel successfully",
			parcel: {
				parcelId: parcel.parcelId,
				weight: parcel.weight
			}
		}
	}

	function sendSuccessResponse(response){
		res.status(200).json(response)
	}
}

function fetchParcelFn({ parcelId }){
	return Parcel.find({ _id: parcelId})
}

module.exports = {
	fn: fetchParcelFn,
	route: fetchParcelRoute
}