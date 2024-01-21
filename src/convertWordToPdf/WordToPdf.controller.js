const { convertWordFileToPdf } = require("./WordToPdf.service")
const convertWordToPdf = async () => {
    try {
        if (!req.file) {
            return res.status(400).send('No file uploaded.');
        }
        const pdfBytes = await convertWordFileToPdf(req)
        res.contentType('application/pdf');
        res.send(pdfBytes);
    } catch (error) {
        console.error('Conversion error:', error);
        res.status(500).send('Internal Server Error');
    }
}
module.exports = { convertWordToPdf }