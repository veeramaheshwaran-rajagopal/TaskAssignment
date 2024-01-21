const mammoth = require('mammoth');
const { PDFDocument } = require('pdf-lib');
const convertWordFileToPdf = async () => {
    const wordBuffer = req.file.buffer;

    // Convert Word to HTML using mammoth
    const { value } = await mammoth.extractRawText({ arrayBuffer: wordBuffer });
    const htmlContent = `<html><body>${value}</body></html>`;

    // Create a PDF document
    const pdfDoc = await PDFDocument.create();
    const { width, height } = pdfDoc.pageSizes.A4;
    const page = pdfDoc.addPage([width, height]);
    const { font } = await pdfDoc.embedFont(PDFDocument.Font.Helvetica);

    // Add HTML content to PDF
    const form = await pdfDoc.form();
    const textOptions = {
        font,
        size: 12,
    };
    form.drawText(htmlContent, {
        x: 50,
        y: height - 50,
        ...textOptions,
    });

    // Send the PDF as a response
    const pdfBytes = await pdfDoc.save();
    return pdfBytes
}
module.exports = { convertWordFileToPdf }