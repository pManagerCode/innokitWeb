<template>
  <span
    v-if="this.$fullscreen.support"
    v-resize="onResize"
    style="float: right;"
  >
    <v-icon
      color="secondary"
      :style="$vuetify.breakpoint.mobile ? 'margin-top: 7px;' : ''"
      @click.stop="handleClick"
    >
      {{ isFullscreen ? "mdi-fullscreen-exit" : "mdi-fullscreen" }}
    </v-icon>
  </span>
</template>

<script>
import Screenfull from "screenfull";
import { mapMutations } from "vuex";
import { waitForTime } from "@/components/models";

export default {
  props: {
    element: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      Screenfull,
      isFullscreen: false,
    };
  },
  computed: {},
  methods: {
    ...mapMutations({
      setRoomToggle: "projects/setRoomToggle",
    }),

    onResize() {
      this.isFullscreen = this.$fullscreen.getState(); //Screenfull.isFullscreen;
      this.$emit("toggleFullscreen", this.isFullscreen);
    },

    handleClick() {
      //  this.element.toggle(); // recommended
      if (!this.element) return;
      this.$fullscreen.toggle(document.querySelector("#" + this.element), {
        //  wrap: true,
        //fullscreenClass: "full-screen-z",
        //  background: "#312F52",
      });

      //Screenfull.toggle(document.querySelector("#" + this.element));
      if (
        this.element == "projectInfoRoomInfo" ||
        this.element.includes("room")
      ) {
        if (!Screenfull.isFullscreen) {
          this.setRoomToggle(1);
          waitForTime(100).then(() => {
            this.setRoomToggle(2);
          });
        }
      }
    },
  },
};
</script>

<style lang="stylus" scoped></style>
