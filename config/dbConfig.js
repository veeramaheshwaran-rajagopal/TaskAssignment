const { connect, connection } = require("mongoose")
connection.on("connected", () => {
    console.log("MongoDB Connection Established...")
})
connection.on("error", (err) => {
    console.log(err)
})
connection.on("disconnected", () => {
    console.log("MongoDB Disconnected...")
})
const doConnect = () => {
    return connect(process.env.DBURL)
}
module.exports = { doConnect }