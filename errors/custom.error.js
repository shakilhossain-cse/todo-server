class CustomApiError extends Error{
    constructor(message,statusCode){
        super(message)
        this.statusCode = statusCode
    }
}
const createCustomError = (msg, statusCode) =>{
    return new CustomApiErro(msg, statusCode)
}

module.exports = {CustomApiError, createCustomError}