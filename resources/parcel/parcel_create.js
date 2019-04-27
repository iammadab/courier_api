const { createValidator } = require("../../lib/validator")
const Parcel = require("./parcel_model")

const createParcelValidator = createValidator("weight.number")

function createParcelRoute(req, res){

	createParcelValidator(req.body)
		.catch(sendBadRequestError)
		.then(createParcel)
		.then(createSuccessResponse)
		.then(sendSuccessResponse)

	function sendBadRequestError(errors){
		res.sendError(400, "BAD_REQUEST_BODY", errors)
	}

	function createParcel(){
		return createParcelFn(req.body)
	}

	function createSuccessResponse(parcel){
		return {
			code: 200,
			message: "Parcel created successfully",
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


function createParcelFn({ weight }){

	return Parcel.nextId()
	 	         .then(createNewParcel)
	 	         .then(saveParcel)

	function createNewParcel(parcelId){
		let newParcel = new Parcel({
			parcelId: parcelId,
			weight: weight
		})
		
		return newParcel
	}

	function saveParcel(parcel){
		return parcel.save()
	}

}


module.exports = {
	fn: createParcelFn,
	route: createParcelRoute
}