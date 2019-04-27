const { createValidator } = require("../../lib/validator")
const Parcel = require("./parcel_model")

const createParcelValidator = createValidator("weight.number")


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



function createParcelRoute(req, res){
	createParcelValidator(req.body)
		.catch(sendBadRequestError)
		.then(() => createParcelFn(req.body))
		.then(createSuccessResponse)
		.then(response => res.status(200).json(response))

	function sendBadRequestError(errors){
		res.sendError(400, "BAD_REQUEST_BODY", errors)
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
}



module.exports = {
	fn: createParcelFn,
	route: createParcelRoute
}