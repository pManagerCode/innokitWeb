const fs = require("fs");

function writeFile(req, successCallback, errorCallback) {
  try {
    //console.log('req in writeFile', req)

    var folder = process.cwd() + "\\static\\Documents\\" + req.body.dir;
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder, { recursive: true });
    }

    //console.log('req in writeFile', req)

    for (let file of req.files) {
      var wstream = fs.createWriteStream(
        folder + "\\" + file.originalname.replace(/#/g, "")
      );
      wstream.write(file.buffer);
      wstream.end();
    }
    successCallback("files are successfully created and stored");
  } catch (err) {
    errorCallback(err.message);
  }
}
function deleteFile(req, successCallback, errorCallback) {
  try {
    var folder = process.cwd() + "\\static\\Documents\\" + req;
    fs.unlinkSync(folder);

    successCallback("files are successfully deleted");
  } catch (err) {
    errorCallback(err.message);
  }
}

module.exports = {
  writeFile,
  deleteFile,
};
