import axios from "axios";

export default {
  async getFileList({ commit, state }, body) {
    //console.log('body in getFileList', body)
    try {
      const { data } = await axios.get("/api/getFileList", {});

      commit("setFileList", data);
      return data;
    } catch (e) {
      console.log(e);
      return Promise.reject(e);
    }
  },

  async sendEmail(state, postBody) {
    try {
      const { data } = await axios.post("/api/email", postBody);
      return data;
    } catch (e) {
      console.log(e);
      return Promise.reject(e);
    }
  },
};
