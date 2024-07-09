<template>
  <div>
    <CarouselDialog
      v-if="showDialog"
      :files="selectedFiles"
      :file="selectedFile"
      :is-cycle="isCycle"
      @hideDialog="showDialog = false"
    />

    <v-row dense>
      <v-col
        v-for="(folderName, i) in folderNames"
        :key="i"
        cols="12"
        sm="12"
        :md="folderNames.length > 1 ? 6 : 12"
      >
        <v-card :id="folderName.replace(/ /g, '')" elevation="5">
          <v-card-title class="title">
            {{ folderName }}
            <v-spacer />
          </v-card-title>
          <v-card-text>
            <v-row dense>
              <v-col
                v-for="file in foldersMap[folderName]"
                :key="file"
                style="cursor: pointer;"
                cols="auto"
              >
                <v-img
                  :src="file"
                  color="grey lighten-1"
                  :width="$vuetify.breakpoint.xs ? 370 : 200"
                  tile
                  @click="onClickImage(foldersMap[folderName], file)"
                >
                </v-img>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { keys } from "ramda";

export default {
  name: "RecentProjects",
  components: {
    CarouselDialog: () => import("@/components/CarouselDialog"),
  },
  data: function () {
    return {
      showDialog: false,
    };
  },

  computed: {
    folderNames() {
      return keys(this.foldersMap);
    },
  },

  watch: {},
  created() {},
  mounted() {},

  methods: {
    onClickImage(files, file) {
      this.selectedFiles = files;
      this.selectedFile = file;
      this.showDialog = true;
    },
  },
};
</script>
