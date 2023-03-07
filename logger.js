function log(req, res, next) {
    console.log("Logger connected")
    next()
}

export default log 