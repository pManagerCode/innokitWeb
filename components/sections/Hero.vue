<template>
  <section id="hero">
    <v-carousel
      cycle
      interval="5000"
      height="1080"
      style="overflow-y: auto;"
      hide-delimiters
      :show-arrows="false"
    >
      <v-carousel-item v-for="item in items" :key="item">
        <v-img
          :src="item"
          height="1080"
          gradient="to top right, rgba(5, 11, 31, .5), rgba(5, 11, 31, 0)"
        >
          <v-container class="fill-height px-4 py-12">
            <v-responsive
              class="d-flex align-center"
              height="100%"
              max-width="700"
              width="100%"
            >
              <base-heading
                title="BEST KITCHEN AND JOINERY WITH INNOKIT"
                shadow="shadow"
              />

              <base-body
                :my-class="
                  $vuetify.breakpoint.smAndDown
                    ? 'white--text  text-body-1 shadow'
                    : 'white--text  text-h6 shadow'
                "
              >
                Innokit Pty Ltd is an innovative kitchen and joinery company
                based in Sydney. With a wealth of experience, we are committed
                to providing our customers with contemporary & provincial style
                kitchen and other joinery of designs and innovation solutions.
                Our primary objective is to achieve customer satisfaction in
                every aspect of our services by providing an innovative and
                customised approach. Our efficient production process and
                modernized machines keep our product on high standard. Our
                professional installation team makes sure your project is done
                precisely and beautifully.
              </base-body>
              <base-body
                :my-class="
                  $vuetify.breakpoint.smAndDown
                    ? 'white--text  text-body-1 shadow'
                    : 'white--text  text-h6 shadow'
                "
              >
                We believe the service we provide is the
                <span style="color: #ff6c00;"><b>complete package</b></span
                >, a friendly and professional team member will take you through
                from the initial design, the manufacturing and installation
                process until completion. This level of quality and fast
                response service sets us apart from other companies.
              </base-body>

              <div
                :class="
                  $vuetify.breakpoint.smAndDown
                    ? 'flex-column align-start'
                    : 'align-center'
                "
                class="d-flex flex-wrap"
              >
                <base-btn
                  :block="$vuetify.breakpoint.smAndDown"
                  to="/projects"
                  large
                  outlined
                >
                  Discover More
                </base-btn>
              </div>
            </v-responsive>
          </v-container>
        </v-img>
      </v-carousel-item>
    </v-carousel>
  </section>
</template>

<script>
export default {
  name: "SectionHero",

  provide: {
    theme: { isDark: true },
  },
  data() {
    return {
      items: [
        "./pic/1.jpg",
        "./pic/2.jpg",
        "./pic/3.jpg",
        "./pic/4.jpg",
        "./pic/5.jpg",
        "./pic/6.jpg",
        "./pic/7.jpg",
        "./pic/8.jpg",
        "./pic/9.jpg",
        "./pic/10.jpg",
        "./pic/11.jpg",
        "./pic/12.jpg",
        "./pic/13.jpg",
        "./pic/14.jpg",
        "./pic/15.jpg",
        "./pic/16.jpg",
        "./pic/17.jpg",
        "./pic/18.jpg",
      ],
    };
  },
  computed: {},
};
</script>
