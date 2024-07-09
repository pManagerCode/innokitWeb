<template>
  <div>
    <Hero />

    <ThemeFeatures />

    <v-responsive min-height="280px">
      <div
        v-intersect="{
          handler: onIntersectFeatures,
          options: {
            threshold: [0],
          },
        }"
      >
        <transition name="slide-fade">
          <Features v-show="isIntersectingFeatures" />
        </transition>
      </div>
    </v-responsive>

    <div
      v-intersect="{
        handler: onIntersectAffiliates,
        options: {
          threshold: [0, 0.5, 1.0],
        },
      }"
    >
      <transition name="page">
        <Affiliates v-show="isIntersectingAffiliates" />
      </transition>
    </div>

    <div
      v-intersect="{
        handler: onIntersectContactUs,
        options: {
          threshold: [0, 0.5, 1.0],
        },
      }"
    >
      <transition name="fade">
        <ContactUs v-show="isIntersectingContactUs" />
      </transition>
    </div>

    <div
      v-intersect="{
        handler: onIntersectKeepInTouch,
        options: {
          threshold: [0, 0.5, 1.0],
        },
      }"
    >
      <transition name="slide-fade">
        <KeepInTouch v-show="isIntersectingKeepInTouch" />
      </transition>
    </div>
  </div>
</template>

<script>
// Extensions
import View from "@/components/View";

export default {
  name: "Home",

  components: {
    Hero: () => import("@/components/sections/Hero"),
    ThemeFeatures: () => import("@/components/sections/ThemeFeatures"),
    Features: () => import("@/components/sections/Features"),
    Affiliates: () => import("@/components/sections/Affiliates"),
    ContactUs: () => import("@/components/sections/ContactUs"),
    KeepInTouch: () => import("@/components/sections/KeepInTouch"),
  },
  extends: View,

  props: {
    id: {
      type: String,
      default: "home",
    },
  },

  data: () => ({
    isIntersectingThemeFeatures: false,
    isIntersectingFeatures: false,
    isIntersectingContactUs: false,
    isIntersectingKeepInTouch: false,
    isIntersectingAffiliates: false,
  }),

  methods: {
    onIntersectKeepInTouch(entries) {
      this.isIntersectingKeepInTouch = entries[0].intersectionRatio > 0;
    },
    onIntersectAffiliates(entries) {
      this.isIntersectingAffiliates = entries[0].intersectionRatio > 0;
    },
    onIntersectFeatures(entries) {
      this.isIntersectingFeatures = entries[0].intersectionRatio > 0;
    },
    onIntersectContactUs(entries) {
      this.isIntersectingContactUs = entries[0].intersectionRatio > 0;
    },
    onIntersectThemeFeatures(entries) {
      this.isIntersectingThemeFeatures = entries[0].intersectionRatio > 0;
    },
  },

  head() {
    return {
      title: "Home",
    };
  },
};
</script>
