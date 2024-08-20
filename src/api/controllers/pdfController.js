const PDFDocument = require('pdfkit');
const fs = require('fs');

exports.exportToPDF = (req, res) => {
  const doc = new PDFDocument();
  const fileName = 'report.pdf';

  res.setHeader('Content-Disposition', 'attachment; filename=' + fileName);
  res.setHeader('Content-Type', 'application/pdf');

  doc.pipe(res);
  doc.text('Hello World', 100, 100);
  doc.end();
};