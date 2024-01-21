const options = {
    aboartErly: false
}
const validation = (schema) => async (req, res, next) => {
    const { error } = await schema.validate(req, options)
    if (error) {
        res.status(422).json({ status: false, statusCode: 422, message: error.message })
    }
    else {
        next()
    }

}
module.exports = { validation }