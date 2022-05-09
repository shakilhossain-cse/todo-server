const { CustomApiError } = require("../errors/custom.error");

const errorHandeller = (err, req, res, next) => {
    if (err instanceof CustomApiError) {
        return res.status(err.statusCode).json({msg:err.message})
    }
    return res.status(500).json({ msg: "something went wrong, try again" })
}

module.exports = errorHandeller;