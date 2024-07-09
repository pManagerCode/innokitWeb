<template>
  <base-section id="features" class="secondary">
    <v-responsive class="mx-auto" max-width="1350">
      <v-container fluid>
        <v-row>
          <v-col
            v-for="card in cards"
            :key="card.title"
            cols="12"
            sm="6"
            md="3"
          >
            <base-info-card align="center" dark v-bind="card" />
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </base-section>
</template>

<script>
export default {
  name: "SectionFeatures",

  data: () => ({
    cards: [
      {
        icon: "mdi-whatsapp",
        title: "Personal and Professional",
        text:
          "Whatever the design you have in mind, your kitchen joinery experience should feel seamless. we’ll listen to your ideas. From there, you can enjoy a smooth process that brings you closer to the bespoke kitchen you want.",
      },
      {
        icon: "mdi-panda",
        title: "Best team",
        text:
          "Our kitchen designs, assembly and installation are carried out by a highly experienced skilled and dedicated team of experts. Their passion is reflected in the finished product. The end result is that you’ll benefit from an installation that’s attractive to look at and practical to use.",
      },

      {
        icon: "mdi-camera-iris",
        title: "Smothly Procedure",
        text:
          "From planning out your layout and floorplan to choosing benchtop materials, splashback designs and all of your appliances, it can be quickly and efficiently accomplished by us to save your time and money at best.",
      },
      {
        icon: "mdi-puzzle-outline",
        title: "Our Facility",
        text:
          "We’re proud of our state-of-the-art facilities, where we employ strict quality control over every kitchen that we design and build, using the best possible software and machinery to create great proudcts.",
      },
    ],
  }),
};
</script>
