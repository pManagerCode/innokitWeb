import Vue from "vue";
import VuetifyConfirm from "vuetify-confirm";

export default ({ app }) => {
  Vue.use(VuetifyConfirm, {
    vuetify: app.vuetify,
    title: "Please confirm",
    color: "primary",
    icon: "mdi-exclamation",
    persistent: true,
  });
};
