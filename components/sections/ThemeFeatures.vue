<template>
  <base-section id="theme-features">
    <base-section-heading title="What makes us unique?"> </base-section-heading>

    <v-container>
      <v-row>
        <v-col v-for="(feature, i) in features" :key="i" cols="12" md="6">
          <base-avatar-card v-bind="feature" align="left" horizontal>
          </base-avatar-card>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
export default {
  name: "SectionThemeFeatures",

  data: () => ({
    features: [
      {
        title: "We have our own professional design and installation team",
        icon: "mdi-shape-plus",
        color: "primary",
        dark: true,
      },
      {
        title:
          "We have our own Local factory with advanced machine and mass factory space",
        icon: "mdi-hospital-building ",
        color: "primary",
        dark: true,
      },
      {
        color: "primary",
        dark: true,
        title: "We will provide you with a fast response",
        icon: "mdi-cellphone",
      },
      {
        title: "We can provide you with a 3D design of your project",
        icon: "mdi-image-size-select-actual",
        color: "primary",
        dark: true,
      },
      {
        title: "We will have experienced professional supervision on-site",
        icon: "mdi-nature-people",
        color: "primary",
        dark: true,
      },
      {
        title: "24/7 Support",
        icon: "mdi-help-circle-outline",
        color: "primary",
        dark: true,
      },
    ],
  }),
};
</script>
