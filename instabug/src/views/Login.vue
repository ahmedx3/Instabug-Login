<template>
  <v-row>
    <v-col class="hidden-md-and-down pa-0">
      <v-carousel cycle height="100%" hide-delimiter-background show-arrows-on-hover>
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet :color="colors[i]" height="100%">
            <v-container>
              <v-row justify="center" align="center" class="mt-15"> </v-row>
              <v-row justify="center" align="center" class="mt-15"> </v-row>
              <v-row justify="center" align="center" class="mt-15">
                <v-col class="text-center" cols="8">
                  <v-img :src="slide.image" max></v-img>
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
    </v-col>
    <v-col>
      <v-container class="fill-height">
        <v-row justify="center" class="ma-0 pa-0">
          <v-col cols="9" class="ma-0 pa-0">
            <v-card color="white" elevation="0" class="px-10">
              <v-form v-model="valid">
                <v-row justify="center" align="center" class="text-h3 font-weight-medium my-4 pa-0">
                  <v-col cols="12" class="text-center">
                    <v-img class="mb-3" height="50px" contain src="@/assets/logo.svg" /><v-img />
                    <h1 class="display-1">Log in to Instabug</h1>
                  </v-col>
                </v-row>
                <v-row no-gutters justify="center" align="center" class="py-2 text-h4">
                  <v-btn width="100%" color="#4285F4" class="ma-1 white--text" height="40">
                    <v-icon left dark>
                      mdi-google
                    </v-icon>
                    <v-spacer></v-spacer>
                    Google
                    <v-spacer></v-spacer>
                  </v-btn>
                  <v-btn width="100%" color="#333333" class="ma-1 white--text" height="40">
                    <v-icon left dark>
                      mdi-github
                    </v-icon>
                    <v-spacer></v-spacer>
                    Github
                    <v-spacer></v-spacer>
                  </v-btn>
                  <v-btn width="100%" color="white" class="ma-1 white--text" height="40">
                    <v-icon left dark color="black">
                      mdi-microsoft
                    </v-icon>
                    <v-spacer></v-spacer>
                    <v-card-text class="black--text">Microsoft</v-card-text>
                    <v-spacer></v-spacer>
                  </v-btn>
                </v-row>
                <v-row justify="center" align="center" class="text-h3 font-weight-medium my-4 pa-0">
                  <v-col>
                    <v-divider></v-divider>
                  </v-col>
                  <h1 class="title font-weight-bold">OR</h1>
                  <v-col>
                    <v-divider></v-divider>
                  </v-col>
                </v-row>
                <v-container class="mx-2">
                  <v-row>
                    <h6 class="subtitle-1">Work Email</h6>
                  </v-row>
                  <v-row>
                    <v-text-field dense outlined single-line label="you@company.com"></v-text-field>
                  </v-row>
                  <v-row>
                    <h6 class="subtitle-1">Password</h6>
                    <v-spacer></v-spacer>
                    <h6 class="subtitle-1 gray--text">Forgot password?</h6>
                  </v-row>
                  <v-row>
                    <v-text-field dense outlined single-line label="8+ Characters"></v-text-field>
                  </v-row>
                  <v-row justify="center" align="center" class="mt-0 mb-2">
                    <v-btn width="100%" color="primary" height="40">Log in</v-btn>
                  </v-row>
                  <v-row justify="center" align="center">
                    <h6 class="subtitle-1">Don't have an account?</h6>
                    <h6 class="subtitle-1 blue--text ml-2">Sign up</h6>
                    <v-spacer></v-spacer>
                    <h6 class="subtitle-1 blue--text">Login via SSO</h6>
                  </v-row>
                  <v-row>
                    <v-col class="text-center">
                      <h2 class="subtitle-1 grey--text text--darken-1">
                        Trusted by the top companies.
                      </h2>
                    </v-col>
                  </v-row>
                </v-container>
                <v-row justify="center" align="center">
                  <v-col cols="2">
                    <v-img height="25px" contain src="../assets/Lyft_logo.svg" /><v-img />
                  </v-col>
                  <v-col cols="2">
                    <v-img height="25px" contain src="../assets/BuzzFeed.svg" /><v-img />
                  </v-col>
                  <v-col cols="2">
                    <v-img height="25px" contain src="../assets/Asana_logo.svg" /><v-img />
                  </v-col>
                  <v-col cols="2">
                    <v-img height="25px" contain src="../assets/oneplus.svg" /><v-img />
                  </v-col>
                </v-row>
                <v-container class=""> </v-container>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
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

<style scoped>
.v-carousel__controls {
  bottom: 10%;
}
</style>
