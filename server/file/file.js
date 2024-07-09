const myWriteFile = require("./writeFile.js"); //引入封装好的函数
const myFileList = require("./getFileList.js"); //引入封装好的函数
const multer = require("multer");
const myPdf = require("./generatePdf.js"); //引入封装好的函数
const myEmail = require("./sendEmail.js"); //引入封装好的函数

module.exports = function (app) {
  /////////////////////////For sending email. https://juejin.im/post/5e17ea735188254d3c283b6d
  app.post("/api/email", function (req, res) {
    var params = req.body;
    //console.log("params of email:", params);
    const mail = params.email;
    const cc = params.cc;
    const bcc = params.bcc;
    const subject = params.subject;
    const msg = params.msg;
    const attachments = params.attachments;
    if (!mail) {
      return res.status(500).json("No email address!");
    }

    myEmail.sendMail(
      mail,
      cc,
      bcc,
      subject,
      msg,
      attachments,
      (result) => {
        res.json(result);
      },
      (err) => {
        console.log("sendMail err:", err);
        res.status(500).json("Cannot send email: " + err);
      }
    );
  });

  //////// Files
  //////// Upload files https://stackoverflow.com/questions/57773556/file-upload-using-vuetify-2-v-file-input-and-axios
  app.post("/files", multer().array("files"), function (req, res) {
    // console.log("body in uploadFiles: ", req.body);
    // console.log("files in uploadFiles:", req.files);

    myWriteFile.writeFile(
      req,
      (response) => {
        res.json(response);
      },
      (error) => {
        res.status(500).json("Cannot upload files: " + error);
      }
    );
  });

  app.post("/api/deleteFile", (req, res) => {
    var params = req.body.params;
    myWriteFile.deleteFile(
      params.file,
      (response) => {
        res.json(response);
      },
      (error) => {
        res.status(500).json("Cannot delete file: " + error);
      }
    );
  });

  app.get("/api/getFileList", (req, res) => {
    const fullPath = process.cwd() + "\\static\\Documents\\";
    myFileList.getFileList(
      fullPath,
      (response) => {
        res.json(response);
      },
      (error) => {
        res.status(500).json("Cannot get files: " + error);
        console.log("Error when uploading files", error);
      }
    );
  });

  ////////Create PDF https://medium.com/@kainikhil/nodejs-how-to-generate-and-properly-serve-pdf-6835737d118e#d8e5
  app.post("/api/generatePdf", (req, res) => {
    var params = req.body;
    //console.log('params of generatePdf:', params)

    myPdf.generatePdf(
      params,
      (response) => {
        res.json(response);
      },
      (error) => {
        res.status(500).json("Cannot generate pdf: " + error);
      }
    );
  });
};
