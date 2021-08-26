

const sendError = (res, err) => {
    return res.status(200).json({
        errorMessage: err.message
    })
}

module.exports = sendError;