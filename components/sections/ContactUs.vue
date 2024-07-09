<template>
  <v-theme-provider dark>
    <base-section id="contact-us" class="primary" space="40">
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="10">
            <base-title
              :space="$vuetify.breakpoint.mdAndUp ? 0 : 4"
              title="HAVE QUESTIONS? LET US KNOW!"
            />

            <base-body space="0">
              <span class="white--text">
                Vision, innovation, quality workmanship and exceptional customer
                service are what drives clients to choose InnoKitr as their
                kitchen designer for luxury kitchen renovations in Sydney. We
                have been leading the industry since 2000 to provide high
                quality, unique new design kitchens. All of our new kitchen
                designs are customised by our telant designers to suit the
                lifestyle of our clients, resulting in an exciting experience.
              </span>
            </base-body>
          </v-col>

          <v-col cols="12" md="2" class="mt-4">
            <base-btn
              :block="$vuetify.breakpoint.smAndDown"
              color="white"
              href="/contact"
              large
              outlined
            >
              Enquire Now
            </base-btn>
          </v-col>
        </v-row>
      </v-container>
    </base-section>
  </v-theme-provider>
</template>

<script>
export default {
  name: "SectionContactUs",
};
</script>
