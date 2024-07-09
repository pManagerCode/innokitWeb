<template>
  <v-card :id="folderName.replace(/ /g, '')" elevation="5">
    <!-- windowSize{{ windowSize }} -->
    <v-card-title class="title">
      {{ folderName }}
      <v-spacer />

      <!-- <v-slider v-model="imgHeight" min="200" max="2000" step="1"></v-slider> -->

      <v-spacer />
      <ScreenfullForElement
        class="pt-1"
        :element="folderName.replace(/ /g, '')"
        @toggleFullscreen="toggleFullscreen"
      />
    </v-card-title>
    <v-card-text>
      <v-row dense>
        <v-col v-for="(item, i) in items" :key="i" sm="4">
          <v-sheet color="grey lighten-4" elevation="1">
            <v-row class="ml-2">
              <v-img :src="item.src" contain> </v-img>
            </v-row>
          </v-sheet>
        </v-col>
      </v-row>
    </v-card-text>
    <!-- <v-carousel
      ref="infoBox"
      :cycle="isCycle"
      :height="imgHeight"
      style="overflow-y: auto;"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        transition="slide-up"
        reverse-transition="slide-down"
      >
        <v-img :src="item.src" :height="imgHeight - 50" contain> </v-img>
      </v-carousel-item>
    </v-carousel> -->
  </v-card>
</template>

<script>
import { convertToTitle } from "./models";
import { forEach } from "ramda";
import { mapState } from "vuex";

export default {
  components: {
    ScreenfullForElement: () =>
      import("@/components/Widgets/ScreenfullForElement"),
  },
  props: {
    folderName: {
      type: String,
      required: true,
    },
    files: {
      type: Array,
      default: () => [],
    },
    isCycle: {
      type: Boolean,
      required: false,
    },
  },

  data() {
    return {
      imgHeight: 593,
      isFullscreen: false,
      items: [],
      cycle: false,
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
  computed: {
    ...mapState({
      windowSize: (state) => state.projects.windowSize,
    }),
  },
  mounted() {
    forEach((f) => {
      this.items.push({
        src: f,
        name: f.replace(/^.*[\\\/]/, ""),
      });
    }, this.files);
  },

  methods: {
    toggleFullscreen(isFullscreen) {
      this.isFullscreen = isFullscreen;
      if (this.isFullscreen) {
        this.imgHeight = this.windowSize.y - 86;
      }
    },
    ConvertToTitle(text) {
      return convertToTitle(text);
    },
  },
};
</script>
