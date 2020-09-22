<template>
  <v-app-bar app color="indigo" dark>
    <v-app-bar-nav-icon @click="handleNavigationDrawer"></v-app-bar-nav-icon>
    <v-toolbar-title>{{ title }}</v-toolbar-title>
  </v-app-bar>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "AppBar",

  data: () => ({}),

  computed: {
    title() {
      return this.$route.name;
    }
  },

  methods: {
    ...mapMutations("NavigationDrawer", {
      setNavigationDrawer: "setNavigationDrawer"
    }),

    handleNavigationDrawer() {
      this.setNavigationDrawer(true);
    }
  }
};
</script>

<style lang="scss" scoped></style>
