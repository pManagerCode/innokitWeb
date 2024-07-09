<template>
  <v-theme-provider dark>
    <section id="hero-alt">
      <!--  :gradient="gradient" gradient="to top right, rgba(5, 11, 31, .8), rgba(5, 11, 31, .3)" -->
      <!-- -->
      <base-img
        :height="$route.name === 'aboutUs' ? 600 : 325"
        gradient="to top right, rgba(5, 11, 31, .7), rgba(5, 11, 31, 0.2)"
        :src="src"
        flat
        max-height="100%"
        tile
      >
        <v-container class="fill-height px-4 py-12">
          <v-responsive
            class="d-flex align-center"
            height="100%"
            max-width="700"
            width="100%"
          >
            <base-heading :title="title" space="2" weight="500" />

            <base-divider color="primary" />

            <base-body
              v-if="$route.name === 'aboutUs'"
              :my-class="
                $vuetify.breakpoint.smAndDown
                  ? 'white--text  text-body-1 '
                  : 'white--text  text-h6 '
              "
            >
              Innokit Pty Ltd is a proud, respectable and professional kitchen
              design business with a strong reputation for service, innovation
              and quality workmanship. Our company specialises in kitchen and
              joinery within multi-residential, high-end residential and
              commercial projects.
            </base-body>
            <base-body
              v-if="$route.name === 'aboutUs'"
              :my-class="
                $vuetify.breakpoint.smAndDown
                  ? 'white--text  text-body-1 shadow'
                  : 'white--text  text-h6 shadow'
              "
            >
              As part of our unique service, we manufacture, fabricate, supply
              and install all products. This process allows us to efficiently
              manage our production process to ensure premium standard and
              high-quality products. Our highly experienced and professional
              team will take you through the process from start to finish to
              provide you with the solutions you need.
            </base-body>
          </v-responsive>
        </v-container>
      </base-img>
    </section>
  </v-theme-provider>
</template>

<script>
// Components
import { HexToRGBA, RGBAtoCSS } from "vuetify/lib/util/colorUtils";

export default {
  name: "SectionHeroAlt",

  metaInfo() {
    return {
      changed: (meta) => {
        this.title = meta.titleChunk.toUpperCase();
      },
    };
  },

  provide: {
    heading: { align: "center" },
  },

  data: () => ({}),

  computed: {
    gradient() {
      const color = `${this.$vuetify.theme.themes.light.secondary}CC`;
      const overlay = RGBAtoCSS(HexToRGBA(color));

      return `to top, ${overlay}, ${overlay}`;
    },
    title() {
      if (this.$route.name === "aboutUs") {
        return "About Us";
      } else {
        return "Contact Us";
      }
    },
    src() {
      if (this.$route.name === "aboutUs") {
        return "./pic/厨房2.jpg";
      } else {
        return "./pic/厨房3.jpg";
      }
    },
    items() {
      return [{ text: "HOME", to: "/" }, { text: this.title }];
    },
  },
};
</script>

<style lang="sass">
#hero-alt
  .v-breadcrumbs__item
    color: #FFFFFF
</style>
