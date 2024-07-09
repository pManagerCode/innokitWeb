<template>
  <div class="change-lang">
    <span
      :class="{ 'active-lang': currentLang === 'cn' }"
      @click.stop="switchLang('cn')"
    >
      中文
    </span>
    /
    <span
      :class="{ 'active-lang': currentLang === 'en' }"
      @click.stop="switchLang('en')"
    >
      English
    </span>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "LangBar",
  data() {
    return {
      currentLang: this.$i18n.locale,
    };
  },

  computed: {
    ...mapState({
      locale: (state) => state.locale,
    }),
  },

  mounted() {
    this.currentLang = this.locale;
    this.$i18n.locale = this.locale;
  },

  methods: {
    ...mapMutations({
      SET_LANG: "SET_LANG",
    }),

    switchLang(lang = "cn") {
      this.currentLang = lang;
      this.$i18n.locale = lang;
      this.SET_LANG(lang);
    },
  },
};
</script>

<style lang="scss" scoped>
.change-lang {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  span {
    cursor: pointer;
    padding: 0 2px;
    color: #606466;

    &.active-lang {
      color: #0302f5;
    }
  }
}
</style>
