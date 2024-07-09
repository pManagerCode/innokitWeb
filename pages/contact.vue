<script>
// Extensions
import View from "@/components/View";

// Mixins
import LoadSections from "@/mixins/load-sections";

export default {
  name: "ContactINNOKIT",
  extends: View,

  head() {
    return {
      title: "Contact Us",
    };
  },

  mixins: [
    LoadSections([
      "hero-alt",
      "keep-in-touch",
      "map",
      //"newsletter",
      //"pro-features",
    ]),
  ],

  props: {
    id: {
      type: String,
      default: "about",
    },
  },
};
</script>
