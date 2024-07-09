import moment from "moment";

export default {
  setFileList(state, fileList) {
    state.fileList = fileList.sort();
  },
  setWindowSize(state, windowSize) {
    state.windowSize = windowSize;
  },

  setErrorMessage(state, text) {
    console.log(text);
    state.SnackItems.push({
      id: moment().format("YYYY-MM-DD_HH-mm-ss"),
      color: "error",
      message: "Sorry! " + text,
    });
  },
  setInfoMessage(state, text) {
    state.SnackItems.push({
      id: moment().format("YYYY-MM-DD_HH-mm-ss"),
      color: "success",
      message: text,
    });
  },
  clearSnack(state) {
    state.SnackItems = [];
  },
};
