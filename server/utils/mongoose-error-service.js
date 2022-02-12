const MONGOOSE_ERROR = {
    TYPE: {
        REQUIRED : 'required',
        UNIQUE : 'unique'
    },
    MESSAGE: {
        MUST_BE_UNIQUE : 'Must be unique'
    }
}

module.exports.MONGOOSE_ERROR = MONGOOSE_ERROR

module.exports.computeErrorsForFront = (mongooseError) => {
    let toReturn = {}
    if (mongooseError.name === 'MongoServerError' && mongooseError.code === 11000) {

        toReturn = {
            type: MONGOOSE_ERROR.TYPE.UNIQUE,
            message: MONGOOSE_ERROR.MESSAGE.MUST_BE_UNIQUE
        }
    } else {
        Object.keys(mongooseError.errors).forEach(key => {
            const error = mongooseError.errors[key]
            toReturn[key] = {type: error.kind, message: error.properties.message}
        })
    }
    console.log("clément", "[toReturn]", toReturn);

    return toReturn
}