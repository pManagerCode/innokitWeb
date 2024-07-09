//const pdfMakePrinter = require('pdfmake/src/printer');

var pdfMake = require("pdfmake/build/pdfmake");
var pdfFonts = require("pdfmake/build/vfs_fonts");
pdfMake.vfs = pdfFonts.pdfMake.vfs;
const fs = require('fs');
var jsdom = require("jsdom");
var { JSDOM } = jsdom;
var { window } = new JSDOM("");
var htmlToPdfMake = require("html-to-pdfmake");
//https://www.npmjs.com/package/html-to-pdfmake

function generatePdf(params, successCallback, errorCallback) {
  try {
    var html = htmlToPdfMake(params.content, { window: window });
    var docDefinition = {
      content: [
        html
      ]
    };

    var folder = process.cwd() + '\\static\\Documents\\' + params.dir
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder, { recursive: true })
    }

    var pdfDocGenerator = pdfMake.createPdf(docDefinition);
    pdfDocGenerator.getBuffer(function (buffer) {
      fs.writeFileSync(folder + '\\' + params.fileName, buffer);
    });

    successCallback("PDF successfully created and stored");
  } catch (err) {
    errorCallback(err.message);
  }
};

module.exports = {
  generatePdf
}