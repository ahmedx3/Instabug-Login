<template>
  <v-carousel cycle hide-delimiter-background show-arrows-on-hover height="100%">
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet :color="colors[i]" height="100%">
        <v-container>
          <v-row justify="center" align="center" class="mt-15"> </v-row>
          <v-row justify="center" align="center" class="mt-15"> </v-row>
          <v-row justify="center" align="center" class="mt-15">
            <v-col class="text-center" cols="8">
              <v-img :src="slide.image" max-width="500"></v-img>
            </v-col>
            <!-- <v-img :src="slide.image" class="ma-16"></v-img> -->
          </v-row>
          <v-row align="center" justify="center">
            <div class="ma-5 pa-4 headline font-weight-light white--text text-center">
              {{ slide.text }} Slide
            </div>
          </v-row>
        </v-container>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      colors: ['#002276', '#002276', '#002276'],
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

<style></style>
