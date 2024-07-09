<template>
  <div>
    <!-- <audio id="myAudio" width="0" height="0">
      <source src="/audios/alert1.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio> -->
    <span v-for="(item, i) in items" :key="item.id">
      <v-snackbar
        :absolute="absolute"
        :bottom="bottom"
        :color="item.color"
        :left="left"
        :multi-line="multiLine"
        :right="right"
        :timeout="timeout"
        :top="top"
        :value="i === 0"
        :vertical="vertical"
      >
        {{ item.message }}
        <span style="float: right;">
          <v-btn
            v-if="items.length > 1"
            :color="nextButtonColor"
            text
            @click="removeItem(item)"
            >{{ nextButtonText }} ({{ items.length - 1 }} more)</v-btn
          >

          <v-btn icon :color="closeButtonColor" @click="removeItem(item)">
            <v-icon>{{ closeButtonIcon }}</v-icon>
          </v-btn>
        </span>
      </v-snackbar>
    </span>
  </div>
</template>

<script>
/**
 * A wrapper component for VSnackbar which supports queueing functionality
 */
export default {
  name: "VSnackbarQueue",
  props: {
    /**
     * Position snackbar absolute
     */
    absolute: {
      type: Boolean,
      default: false,
    },
    /**
     * @deprecated since v2.0.0
     *
     * Auto height prop for snackbar
     */
    autoHeight: {
      type: Boolean,
      default: false,
    },
    /**
     * Position snackbar bottom
     */
    bottom: {
      type: Boolean,
      default: false,
    },
    /**
     * The color of the close button
     */
    closeButtonColor: {
      type: String,
      default: "white",
    },
    /**
     * The icon of the close button
     */
    closeButtonIcon: {
      type: String,
      default: "mdi-close",
    },
    /**
     * Array for items to display [{id: '', color: '', message: ''}]
     */
    items: {
      type: Array,
      required: true,
    },
    /**
     * Position snackbar left
     */
    left: {
      type: Boolean,
      default: false,
    },
    /**
     * Position snackbar multiline
     */
    multiLine: {
      type: Boolean,
      default: false,
    },
    /**
     * The color of the next button
     */
    nextButtonColor: {
      type: String,
      default: "white",
    },
    /**
     * The text to display in the next button
     */
    nextButtonText: {
      type: String,
      default: "Next",
    },
    /**
     * Position snackbar right
     */
    right: {
      type: Boolean,
      default: false,
    },
    /**
     * Number of milliseconds to display each snackbar for
     */
    timeout: {
      type: Number,
      default: 3600 * 24 * 10,
    },
    /**
     * Position snackbar top
     */
    top: {
      type: Boolean,
      default: false,
    },
    /**
     * Position snackbar vertical
     */
    vertical: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    timeoutId: false,
  }),

  computed: {},

  watch: {
    items() {
      this.processItems();
    },
  },
  mounted() {
    this.processItems();
  },
  methods: {
    processItems() {
      if (this.items && Array.isArray(this.items) && this.items.length > 0) {
        if (this.items[0].messageId) {
          var vid = document.getElementById("myAudio");
          vid.play();
        } else {
          const item = this.items[0];
          setTimeout(() => {
            this.removeItem(item);
          }, 5000);
        }
      }
    },
    removeItem(item) {
      this.$emit("remove", item);

      this.processItems();
    },
  },
};
</script>
