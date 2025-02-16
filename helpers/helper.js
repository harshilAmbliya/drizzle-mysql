const prepareSuccessResponse = (data, message) => {
    return {
        status: "success",
        message: message,
        data: data
    }
}

const prepareErrorResponse = (message) => {
    return {
        status: "error",
        message: message
    }
}

export { prepareSuccessResponse, prepareErrorResponse };