<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-info-card title="KEEP IN TOUCH WITH US" pace="6"> </base-info-card>

      <base-business-contact dense />
    </div>
  </v-theme-provider>
</template>

<script>
export default {
  name: "BaseBusinessInfo",

  props: { dark: Boolean },

  data: () => ({
    business: [
      {
        icon: "mdi-map-marker-outline",
        title: "Address",
        text: "95 Market Street, Smithfield, NSW 2164",
      },
      {
        icon: "mdi-cellphone",
        title: "Phone",
        text: "0416 168 810",
      },
      {
        icon: "mdi-email",
        title: "Email",
        text: "Info@innokit.com.au",
      },
    ],
  }),
};
</script>
