const docPdfConverter = require("docx-pdf");
const { errorHandler, sendResponse } = require("../../utils/commonFunctions")
const convertWordToPdf = (req, res) => {
    try {
        docPdfConverter(req.file.path, "output.pdf", (err) => {
            if (err) {
                return sendResponse(res, true, 400, "Conversion Failed...")
            }
            res.download("output.pdf")
        })
    } catch (error) {
        errorHandler(error, res)
    }
}
module.exports = { convertWordToPdf }