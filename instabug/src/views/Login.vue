<template>
  <v-row fill-height class="pa-0">
    <v-col class="hidden-md-and-down pa-0">
      <v-carousel cycle height="100%" hide-delimiter-background show-arrows-on-hover>
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet :color="colors[i]" height="100%">
            <v-container>
              <v-img :src="slide.image" class="ma-16"></v-img>
              <v-row align="center" justify="center">
                <div class="ma-5 pa-4 headline font-weight-light white--text">
                  {{ slide.text }} Slide
                </div>
              </v-row>
            </v-container>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-col>
    <v-col>
      <h1>sdas</h1>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      colors: ['#002276', '#002276', '#002276'],
      slidess: ['Accelerate Your Entire Mobile Team Workflow', 'Second', 'Third'],
      images: [
        '../assets/Product-overview.svg',
        '../assets/Products-bug-reporting.svg',
        '../assets/Products-crash-reporting.svg',
      ],
      slides: [
        {
          text: 'Accelerate Your Entire Mobile Team Workflow',
          // eslint-disable-next-line global-require
          image: require('@/assets/Product-overview.svg'),
        },
        {
          text: 'The Most Comprehensive Bug Reporting Tool for Mobile Apps',
          // eslint-disable-next-line global-require
          image: require('@/assets/Products-bug-reporting.svg'),
        },
        {
          text: 'Secure Crach Reporting With Real-Time Alerts',
          // eslint-disable-next-line global-require
          image: require('@/assets/Products-crash-reporting.svg'),
        },
      ],
    };
  },
};
</script>

<style>
.col {
  padding: 0px im !important;
}
</style>
