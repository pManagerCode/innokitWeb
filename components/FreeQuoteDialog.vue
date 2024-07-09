<template>
  <div>
    <v-dialog
      v-model="show"
      max-width="800px"
      width="unset"
      persistent
      @keydown.esc="$emit('hideDialog')"
    >
      <v-card dark style="border: 5px solid #d2ac67;">
        <!-- userPermission{{ userPermission }} -->
        <!-- editedItem{{ editedItem }} valid:{{ valid }} changed:{{ changed }} -->
        <v-card-title>
          <span class="headline">Let's get started</span>

          <v-spacer />

          <v-btn icon color="error" @click="$emit('hideDialog')">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text>
          <base-contact-form
            class="mt-3"
            title="To arrange a free quote, call us on 0416 168 810."
            subtitle="Or, send through your information below and we'll contact you shortly."
            @hideDialog="$emit('hideDialog')"
          />
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    item: { default: () => {}, type: Object },
  },

  data: () => ({
    isClient: false,
    show: true,
  }),

  computed: {},

  watch: {},

  created() {},
  mounted() {},

  methods: {},
};
</script>
