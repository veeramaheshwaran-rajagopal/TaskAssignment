const docPdfConverter = require("docx-pdf");
//convert doc to pdf
const convertWordFileToPdf = async (req) => {
    try {

        docPdfConverter(req.file.path, "output.pdf", (err, res) => {
            res.download("output.pdf")
        })
    } catch (error) {
        console.error('Conversion error:', error.message);
        throw error;
    }
};
module.exports = { convertWordFileToPdf }