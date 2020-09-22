<template>
  <v-app class="App">
    <v-main>
      <NavigationDrawer />
      <AppBar />

      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
const NavigationDrawer = () =>
  import("@/components/LayoutComponents/NavigationDrawer.vue");

const AppBar = () => import("@/components/LayoutComponents/AppBar.vue");
export default {
  name: "App",

  components: { NavigationDrawer, AppBar },
  props: {},
  data: () => ({}),
  computed: {},
  created() {},
  mounted() {},
  methods: {},
  watch: {}
};
</script>

<style lang="scss" scoped>
.App {
  background-color: #efefef !important;
}
</style>
