<template>
  <base-section space="0" height="700">
    <ScreenfullForElement
      element="map"
      style="position: relative; right: 20px; top: 30px;"
    />

    <iframe
      id="map"
      allowfullscreen
      aria-hidden="false"
      frameborder="0"
      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCWlXyCLonEsn1HGRCisgo4VLX7sztsYF4&q=167+Magowar+Road+Girraween+NSW+2145"
      style="border: 0; display: block;"
      tabindex="0"
      width="100%"
      class="fill-height"
    />
  </base-section>
</template>

<script>
export default {
  name: "SectionMap",
  components: {
    ScreenfullForElement: () =>
      import("@/components/Widgets/ScreenfullForElement"),
  },

  provide: {
    heading: { align: "center" },
  },
};
</script>
