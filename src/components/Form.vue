<template>
  <v-form v-model="valid">
    <v-container class="mx-2">
      <v-row v-if="worngEmailOrPass">
        <v-alert color="red" text dense width="100%" id="emailNotExist">
          Your email and/or password are incorrect
        </v-alert>
      </v-row>
      <v-row>
        <h6 class="subtitle-1">Work Email</h6>
      </v-row>
      <v-row id="emailRow">
        <v-text-field
          id="emailInput"
          class="emailField"
          dense
          outlined
          single-line
          label="you@company.com"
          v-model="email"
          :rules="[rules.required, rules.email]"
        ></v-text-field>
      </v-row>
      <v-row>
        <h6 class="subtitle-1">Password</h6>
        <v-spacer></v-spacer>
        <h6 class="subtitle-1 gray--text">Forgot password?</h6>
      </v-row>
      <v-row>
        <v-text-field
          id="passwordInput"
          class="mb-2"
          dense
          outlined
          single-line
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          @click:append="showPassword = !showPassword"
          label="8+ Characters"
          v-model="password"
          :rules="[rules.required, rules.passwordMatchEmail, rules.passwordCorrect]"
        ></v-text-field>
      </v-row>
      <v-row justify="center" align="center" class="mt-0 mb-2">
        <v-btn width="100%" color="primary" height="40" disabled v-if="!enableLogin" id="loginBTN"
          >Log in</v-btn
        >
        <v-btn width="100%" color="primary" height="40" v-else @click="loginAction" id="loginBTN"
          >Log in</v-btn
        >
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
      <v-col cols="2"> <v-img height="25px" contain src="../assets/oneplus.svg" /><v-img /> </v-col>
    </v-row>
    <v-container class=""> </v-container>
  </v-form>
</template>

<script>
import usersData from '../data/Users.json';

export default {
  data() {
    return {
      email: '',
      password: '',
      showPassword: false,
      enableLogin: false,
      worngEmailOrPass: false,
      rules: {
        required: value => !!value || 'Required.',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || 'Enter a valid email address';
        },
        passwordCorrect: value => {
          const pattern = /^(?=.*?[A-Z])(?=.*?[0-9]).{8,}$/;
          return (
            pattern.test(value) ||
            'Password must be 8 characters or more with at least one uppercase letter and one number'
          );
        },
        passwordMatchEmail: value => {
          return this.email.split('@')[0] !== value || 'Password must be different from email';
        },
      },
      valid: false,
    };
  },
  methods: {
    loginAction() {
      const emailFound = usersData.find(o => o.email === this.email);
      if (emailFound) {
        if (this.password === emailFound.password) {
          localStorage.setItem(
            'user',
            JSON.stringify({
              email: this.email,
              password: this.password,
            }),
          );
          this.$router.push('/welcome');
        } else {
          this.worngEmailOrPass = true;
        }
      } else {
        this.worngEmailOrPass = true;
      }
    },
  },
  computed: {
    changeData() {
      const { password, email } = this;
      return {
        password,
        email,
      };
    },
  },
  watch: {
    changeData: {
      handler: function(val) {
        if (this.email !== '' && this.password !== '') {
          this.enableLogin = true;
        } else {
          this.enableLogin = false;
        }
      },
      deep: true,
    },
  },
};
</script>

<style></style>
