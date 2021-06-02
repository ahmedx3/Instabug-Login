<template>
  <div>
    welcome
    <v-btn depressed color="primary" @click="logOutAction">
      Log out
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
};
</script>

<style></style>
