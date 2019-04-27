const { createValidator } = require("../../lib/validator")
const Parcel = require("./parcel_model")

const createParcelValidator = createValidator("weight.number")

function createParcelFn({ weight }){
	let newParcel = new Parcel({
		weight: weight
	})

	return newParcel.save()
}

function createParcelRoute(req, res){
	createParcelValidator(req.body)
		.catch(sendBadRequestError)
		.then(() => createParcelFn(req.body))
		.then(createSuccessResponse)

	function sendBadRequestError(errors){
		res.sendError(400, "BAD_REQUEST_BODY", errors)
	}

	function createSuccessResponse(){
		return {
			code: 200,
			message: "Parcel created successfully"
		}
	}
}

module.exports = {
	fn: createParcelFn,
	route: createParcelRoute
}