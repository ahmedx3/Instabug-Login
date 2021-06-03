<template>
  <v-row>
    <v-col class="hidden-sm-and-down pa-0 ">
      <carousel></carousel>
    </v-col>
    <v-col>
      <v-container class="fill-height">
        <v-row justify="center" class="ma-0 pa-0">
          <v-col cols="9" class="ma-0 pa-0">
            <v-card color="white" elevation="0" class="px-10">
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
              <Form></Form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
import Carousel from '../components/Carousel.vue';
import Form from '../components/Form.vue';

export default {
  components: { Carousel, Form },

  beforeRouteEnter(to, from, next) {
    if (localStorage.getItem('user')) {
      next({ name: 'Welcome' });
    } else {
      next();
    }
  },
};
</script>
