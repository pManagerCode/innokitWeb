<script>
import { mapState } from "vuex";
import { forEach, indexOf, drop, split } from "ramda";
import ShowPictures from "@/components/ShowPictures";
import { waitForTime } from "@/components/models";

export default {
  name: "RecentProjects",
  components: {},

  extends: ShowPictures,
  data: function () {
    return {
      selectedFiles: [],
      selectedFile: "",
      isCycle: true,
      foldersMap: [],
    };
  },

  computed: {
    ...mapState({
      fileList: (state) => state.projects.fileList,
    }),
  },

  watch: {},
  created() {},
  async mounted() {
    let count = 0;
    while (this.fileList.length == 0 && count < 10) {
      await waitForTime(500);
      count++;
    }
    this.getFoldersMap();
  },

  methods: {
    getFoldersMap() {
      this.foldersMap = [];
      forEach((fileFullName) => {
        var index = indexOf("Documents", fileFullName);
        let src = drop(index, fileFullName).replace(/\\\\/g, "\\");

        var fileName = drop(10, src);
        if (fileName.toLowerCase().includes("project")) {
          var fileNameArray = split("\\", fileName);
          var folder = fileNameArray[0];

          if (!this.foldersMap[folder]) {
            this.foldersMap[folder] = [];
          }
          this.foldersMap[folder].push("./" + src);
        }
      }, this.fileList || []);
    },
  },

  head() {
    return {
      title: "Recent Projects",
    };
  },
};
</script>
