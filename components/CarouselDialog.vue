<template>
  <div>
    <v-dialog
      ref="dialog"
      v-model="show"
      fullscreen
      persistent
      @keydown.esc="$emit('hideDialog')"
    >
      <v-card dark>
        <v-card-text>
          <v-btn
            icon
            color="error"
            style="right: 5px; position: absolute;"
            @click="$emit('hideDialog')"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>

          <v-carousel
            v-model="model"
            :cycle="isCycle"
            :height="imgHeight"
            hide-delimiter-background
            style="overflow-y: auto;"
          >
            <v-carousel-item
              v-for="f in files"
              :key="f"
              transition="fade"
              reverse-transition="fade"
            >
              <v-img :src="f" :height="imgHeight - 50" contain> </v-img>
            </v-carousel-item>
          </v-carousel>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { findIndex } from "ramda";

export default {
  components: {},
  props: {
    files: { required: true, type: Array },
    file: { default: "", type: String },
    isCycle: { default: false, type: Boolean },
  },

  data: () => ({
    model: null,
    isClient: false,
    show: true,
    imgHeight: 600,
  }),

  computed: {},

  watch: {},

  created() {},
  mounted() {
    this.$nextTick(() => {
      if (this.$refs.dialog) {
        this.imgHeight = this.$refs.dialog.$refs.dialog.clientHeight;
      }
    });

    if (this.file) {
      let index = findIndex((f) => f === this.file)(this.files);
      this.model = index;
    }
  },

  methods: {},
};
</script>
