const fs = require("fs");

function getFiles(dir, files_, dirs_) {
  //console.log("dir in getFiles",  dir)
  files_ = files_ || [];
  dirs_ = dirs_ || [];
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  var files = fs.readdirSync(dir);
  for (var i in files) {
    var name = dir + "\\" + files[i];
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files_, dirs_);
      dirs_.push(name);
    } else {
      files_.push(name);
    }
  }
  return { files: files_, dirs: dirs_ };
}

function getFileList(dir, successCallback, errorCallback) {
  try {
    var { files } = getFiles(dir, [], []);

    successCallback(files);
  } catch (err) {
    errorCallback(err.message);
  }
}

module.exports = {
  getFileList,
};
