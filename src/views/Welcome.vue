<template>
  <v-container>
    <v-row justify="center" align="center">
      <h1 class="h2 indigo--text text--darken-4">Welcome</h1>
    </v-row>
    <v-row justify="center" align="center">
      <h1 class="headline indigo--text text--darken-4">{{ userEmail }}</h1>
    </v-row>
    <v-row justify="center" align="center" class="ma-4"> </v-row>
    <v-row justify="center" align="center">
      <v-btn depressed color="primary" @click="logOutAction">
        Log out
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      userEmail: '',
    };
  },
  methods: {
    logOutAction() {
      localStorage.removeItem('user');
      this.$router.push('/login');
    },
  },
  beforeCreate() {
    if (!localStorage.getItem('user')) {
      this.$router.push('/login');
    }
  },
  created() {
    console.log();
    this.userEmail = JSON.parse(localStorage.getItem('user')).email;
  },
};
</script>

<style></style>
