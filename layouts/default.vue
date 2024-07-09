<template>
  <client-only>
    <v-app id="app" ref="appBar" v-resize="onResize" light>
      <!-- theSnackItems{{ theSnackItems }}
      listItemGroup{{ listItemGroup }} 
      windowSize{{ windowSize }}-->
      <SnackbarQueue
        :items="theSnackItems"
        top
        centered
        @remove="removeSnackItem"
      ></SnackbarQueue>

      <FreeQuoteDialog
        v-if="showDialog"
        @hideDialog="showDialog = false"
      ></FreeQuoteDialog>

      <v-navigation-drawer v-model="drawer" temporary absolute>
        <v-list nav dense>
          <v-list-item-group
            v-model="listItemGroup"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item
              v-for="menu in menus"
              :key="`${menu.name}-app-bar`"
              @click.stop="goto(menu.link)"
            >
              <v-list-item-icon>
                <v-icon>{{ menu.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ menu.name }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <!-- style="overflow-y: hidden;" -->
      <v-card>
        <v-app-bar
          absolute
          color="#fcb69f"
          dark
          shrink-on-scroll
          :src="bannerImage"
          scroll-target="#mainSheet"
          scroll-threshold="200"
          style="max-height: 127px;"
        >
          <template v-slot:img="{ props }">
            <v-img
              v-bind="props"
              gradient="to top right, rgba(19,84,122,.3), rgba(128,208,199,.7)"
            ></v-img>
          </template>

          <span v-if="windowSize.x > 1400 && $vuetify.breakpoint.lgAndUp">
            <v-row dense no-gutters :style="screenWidthStyle">
              <v-col md="5">
                <span class="no-decoration white-text">
                  <span v-for="menu in menus" :key="`${menu.name}-app-bar`">
                    <v-btn
                      text
                      rounded
                      :to="menu.link"
                      active-class="custom-active-link"
                      style="font-size: 1.3rem;"
                    >
                      <v-icon>{{ menu.icon }}</v-icon>
                      <span class="shadow">
                        {{ $t(menu.name) }}
                      </span>
                    </v-btn>
                  </span>
                </span>

                <transition name="fade">
                  <span
                    v-if="!isScrolling"
                    style="
                      position: fixed;
                      left: 30px;
                      top: 50px;
                      color: #f7882f;
                      cursor: pointer;
                    "
                    class="shadow text-h5"
                    @click.stop="goto('/')"
                  >
                    <b>
                      <span class="ml-9">Free Quote: Info@innokit.com.au</span>
                      <br />
                      <span class="mr-4">ABN: 74 632 072 247</span>
                      <span>Licence No. 352247C</span>
                    </b>
                  </span>
                </transition>
              </v-col>
              <v-col :md="isScrolling ? 6 : 5" align="center" justify="center">
                <transition name="fade" class="pt-3">
                  <span
                    class="shadow3 text-h3 px-3"
                    :style="innokitNameStyles"
                    @click.stop="goto('/')"
                  >
                    INNOVATIVE KITCHEN SYDNEY
                  </span>
                </transition>

                <transition name="fade">
                  <v-btn
                    class="text-capitalize subtitle-2"
                    :style="quoteBtnStyles"
                    color="primary"
                    min-width="112"
                    @click="showDialog = true"
                  >
                    BOOK A FREE QUOTE
                  </v-btn>
                </transition>

                <!-- </span> -->
              </v-col>
              <v-col :md="isScrolling ? 1 : 2" align="center">
                <v-row no-gutters>
                  <v-col cols="10">
                    <transition name="fade">
                      <span>
                        <v-img
                          :src="require('@/assets/pic/icon.png')"
                          :style="iconStyles"
                          width="170"
                          style="
                            transition-property: position;
                            transition-duration: 2s;
                          "
                          :aspect-ratio="1.459"
                          @click.stop="goto('/')"
                        />
                      </span>
                    </transition>
                  </v-col>
                  <v-col cols="2">
                    <ScreenfullForElement
                      element="app"
                      class="mt-2"
                      style="float: right;"
                    />
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </span>

          <span v-if="windowSize.x < 1400 && windowSize.x > 960">
            <v-row dense no-gutters :style="screenWidthStyle">
              <v-col md="7">
                <span class="no-decoration white-text">
                  <span v-for="menu in menus" :key="`${menu.name}-app-bar`">
                    <v-btn
                      text
                      rounded
                      :to="menu.link"
                      active-class="custom-active-link"
                      style="font-size: 1.3rem;"
                    >
                      <span class="shadow">
                        {{ $t(menu.name) }}
                      </span>
                    </v-btn>
                  </span>
                </span>

                <transition name="fade">
                  <span
                    v-if="!isScrolling"
                    style="
                      position: fixed;
                      left: 30px;
                      top: 50px;
                      color: #f7882f;
                      cursor: pointer;
                    "
                    class="shadow text-h6"
                    @click.stop="goto('/')"
                  >
                    <b>
                      <span class="ml-9">Free Quote: Info@innokit.com.au</span>
                      <br />
                      <span class="mr-4">ABN: 74 632 072 247</span>
                      <span>Licence No. 352247C</span>
                    </b>
                  </span>
                </transition>
              </v-col>
              <v-col :md="isScrolling ? 4 : 3" align="center" justify="center">
                <transition name="fade" class="pt-3">
                  <span
                    class="shadow3 text-h3 px-3"
                    :style="innokitNameStyles"
                    @click.stop="goto('/')"
                  >
                    INNOKIT
                  </span>
                </transition>

                <transition name="fade">
                  <v-btn
                    class="text-capitalize subtitle-2"
                    :style="quoteBtnStyles"
                    color="primary"
                    min-width="112"
                    @click="showDialog = true"
                  >
                    FREE QUOTE
                  </v-btn>
                </transition>

                <!-- </span> -->
              </v-col>
              <v-col :md="isScrolling ? 1 : 2" align="center">
                <v-row no-gutters>
                  <v-col cols="10">
                    <transition name="fade">
                      <span>
                        <v-img
                          :src="require('@/assets/pic/icon.png')"
                          :style="iconStyles"
                          width="170"
                          style="
                            transition-property: position;
                            transition-duration: 2s;
                          "
                          :aspect-ratio="1.459"
                          @click.stop="goto('/')"
                        />
                      </span>
                    </transition>
                  </v-col>
                  <v-col cols="2">
                    <ScreenfullForElement
                      element="app"
                      class="mt-2"
                      style="float: right;"
                    />
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </span>

          <span v-if="windowSize.x <= 960">
            <v-row dense no-gutters :style="screenWidthStyle">
              <v-col cols="3">
                <v-app-bar-nav-icon
                  color="primary"
                  @click="drawer = true"
                ></v-app-bar-nav-icon>
              </v-col>
              <v-col cols="9" align="right">
                <v-row no-gutters>
                  <v-col cols="10">
                    <span v-if="!isScrolling">
                      <transition name="fade">
                        <v-img
                          :src="require('@/assets/pic/icon.png')"
                          style="
                    cursor: 'pointer', filter: 'drop-shadow(0px 0px 0.8rem
                    white)'"
                          width="170"
                          @click.stop="goto('/')"
                        />
                      </transition>
                    </span>

                    <span v-if="isScrolling">
                      <transition name="fade">
                        <v-toolbar-title
                          style="cursor: pointer;"
                          class="shadow3 text-h5"
                          @click.stop="goto('/')"
                        >
                          INNOKIT
                        </v-toolbar-title>
                      </transition>
                    </span>
                  </v-col>
                  <v-col cols="2">
                    <ScreenfullForElement
                      element="app"
                      class="mt-2"
                      style="float: right;"
                    />
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </span>
        </v-app-bar>

        <v-sheet
          id="mainSheet"
          v-scroll.self="onScroll"
          class="overflow-y-auto myscrollbar"
          :max-height="isScrolling ? windowSize.y - 62 : windowSize.y - 122"
          :style="isScrolling ? 'margin-top: 60px;' : 'margin-top: 120px;'"
        >
          <v-main ref="main">
            <nuxt />

            <v-footer padless dark>
              <v-row
                v-if="$vuetify.breakpoint.smAndDown"
                justify="center"
                class="black py-6"
              >
                <v-col align="center" cols="6">
                  <span class="py-2 white--text text-center">
                    <a class="no-decoration" href="/">
                      INNOKIT
                    </a>
                  </span>
                </v-col>

                <v-col align="center" cols="6">
                  <v-icon color="green">
                    mdi-phone
                  </v-icon>
                  <span class="py-2 white--text text-center">
                    0416 168 810
                  </span>
                </v-col>
                <v-col align="center" cols="12">
                  <v-icon color="green">
                    mdi-map-marker
                  </v-icon>
                  <span class="py-2 white--text text-center">
                    Address: 95 Market Street, Smithfield, NSW 2164
                  </span>
                </v-col>

                <v-col align="center" cols="12">
                  <v-icon color="green">
                    mdi-email
                  </v-icon>
                  <span class="py-2 white--text text-center">
                    Info@innokit.com.au
                  </span>
                </v-col>
              </v-row>

              <v-row v-else justify="center" class="black py-9" no-gutters>
                <v-col align="center" sm="4">
                  <a class="no-decoration" href="/">
                    INNOVATIVE KITCHEN SYDNEY
                  </a>
                </v-col>
                <v-col align="center" sm="4">
                  <v-icon color="green">
                    mdi-phone
                  </v-icon>

                  <span class="py-2 white--text text-center">
                    0416 168 810
                  </span>
                </v-col>
                <v-col align="center" sm="4">
                  <v-icon color="green">
                    mdi-email
                  </v-icon>
                  <span class="py-2 white--text text-center">
                    Info@innokit.com.au
                  </span>
                </v-col>
                <v-col align="center" sm="12" class="mt-6">
                  <v-icon color="green">
                    mdi-map-marker
                  </v-icon>
                  <span class="py-2 white--text text-center">
                    Address: 95 Market Street, Smithfield, NSW 2164
                  </span>
                </v-col>
              </v-row>
            </v-footer>
          </v-main>
        </v-sheet>
      </v-card>
    </v-app>
  </client-only>
</template>

<script>
import { clone, isEmpty } from "ramda";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import { provideStore } from "@/composables/useStore";
export default {
  setup(props, { root: { $store } }) {
    provideStore($store);
  },

  components: {
    SnackbarQueue: () => import("@/components/Shared/SnackbarQueue"),
    ScreenfullForElement: () =>
      import("@/components/Widgets/ScreenfullForElement"),
    FreeQuoteDialog: () => import("@/components/FreeQuoteDialog"),
  },
  data() {
    return {
      showDialog: false,
      screenWidthStyle: null,
      iconStyles: {
        right: "15px",
        top: "0px",
        cursor: "pointer",
        filter: "drop-shadow(0px 0px 0.8rem white)",
        transitionProperty: "top",
        transitionDuration: "2s",
      },

      quoteBtnStyles: {
        marginTop: "20px",
        transitionProperty: "margin",
        transitionDuration: "2s",
      },

      innokitNameStyles: {
        cursor: "pointer",
        fontSize: "2.8rem !important",
        transitionProperty: "font",
        transitionDuration: "2s",
      },

      listItemGroup: null,

      collapseOnScroll: true,
      isScrolling: false,
      bannerImage: null,
      clickedItem: -1,
      floatBtn: false,
      windowSize: {
        x: 0,
        y: 0,
      },

      menus: [
        {
          name: "Contact",
          icon: "mdi-message-alert",
          link: "/contact",
        },
        {
          name: "About Us",
          icon: "mdi-account-multiple",
          link: "/aboutUs",
        },
        {
          name: "Gallery",
          icon: "mdi-camera",
          link: "/gallery",
        },
        {
          name: "Projects",
          icon: "mdi-sitemap",
          link: "/projects",
        },
      ],

      drawer: false,
      showPersonDialog: false,
      editedItem: null,
      theSnackItems: [],
    };
  },

  computed: {
    ...mapState({
      SnackItems: (state) => state.projects.SnackItems,
    }),
    ...mapGetters({
      userPermission: "projects/userPermission",
    }),
  },

  watch: {
    SnackItems(val) {
      this.theSnackItems = clone(val);
    },
  },

  created() {
    var num = 1 + Math.floor(Math.random() * 18); //1 + 0~17
    this.bannerImage = "./pic/" + num + ".jpg";
    this.getFileList().catch((e) => {
      this.setErrorMessage(e.response ? e.response.data : e.message);
    });
  },

  mounted() {
    this.onResize();
  },

  methods: {
    ...mapMutations({
      clearSnack: "projects/clearSnack",
      setWindowSize: "projects/setWindowSize",
      setErrorMessage: "projects/setErrorMessage",
    }),
    ...mapActions({
      getFileList: "projects/getFileList",
    }),

    onResize() {
      this.windowSize = {
        x: window.innerWidth,
        y: window.innerHeight,
      };
      this.setWindowSize(this.windowSize);

      this.screenWidthStyle = {
        width: this.windowSize.x - 48 + "px",
      };
    },

    removeSnackItem(item) {
      const index = this.theSnackItems.findIndex(
        (snack) => snack.id === item.id
      );

      if (index !== -1) {
        this.theSnackItems.splice(index, 1);
        if (item.messageId) this.updateMessage(item.messageId);
      }

      if (isEmpty(this.theSnackItems)) {
        this.clearSnack();
      }
    },

    onScroll(event) {
      this.$refs.main.$el.focus();
      if (event.target.scrollTop > 1) {
        this.isScrolling = true;

        this.iconStyles = {
          position: "absolute",
          top: "300px",
          right: "15px",
          cursor: "pointer",
          filter: "drop-shadow(0px 0px 0.8rem white)",
          transitionProperty: "top",
          transitionDuration: "2s",
        };
        if (this.$vuetify.breakpoint.smAndDown) {
          this.iconStyles = {
            width: "0",
          };
        }

        this.quoteBtnStyles = {
          marginTop: "-10px",
          transitionProperty: "margin",
          transitionDuration: "2s",
        };

        this.innokitNameStyles = {
          cursor: "pointer",
          fontSize: "1.8rem !important",
          marginRight: "20px",
          transitionProperty: "font",
          transitionDuration: "2s",
        };
      } else {
        this.isScrolling = false;

        this.iconStyles = {
          right: "15px",
          top: "0px",
          cursor: "pointer",
          filter: "drop-shadow(0px 0px 0.8rem white)",
          transitionProperty: "top",
          transitionDuration: "2s",
        };

        this.quoteBtnStyles = {
          marginTop: "20px",
          transitionProperty: "margin",
          transitionDuration: "2s",
        };

        this.innokitNameStyles = {
          cursor: "pointer",
          fontSize: "2.8rem !important",
          transitionProperty: "font",
          transitionDuration: "2s",
        };
      }
    },
    goto(link) {
      this.$router.push(link);
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-active-link {
  color: #ff6c00 !important;

  i {
    color: #ff6c00 !important;
  }

  .v-list-item__title {
    color: #ff6c00 !important;
  }
}
</style>

<style lang="scss">
.theme--light.v-application {
  background: #eee !important;
}
.theme--light.v-sheet {
  background: #eee !important;
}

.v-btn {
  text-transform: none !important;
}

.v-pagination {
  width: 50% !important;
}
</style>

<style lang="stylus">
@import '../assets/stylus/main';
</style>

<style lang="scss">
.myscrollbar::-webkit-scrollbar {
  width: 15px;
}

.myscrollbar::-webkit-scrollbar-track {
  background: #e6e6e6;
  border-left: 1px solid #dadada;
}

.myscrollbar::-webkit-scrollbar-thumb {
  background: #b0b0b0;
  border: solid 3px #e6e6e6;
  border-radius: 7px;
}

.myscrollbar::-webkit-scrollbar-thumb:hover {
  background: black;
}
</style>
