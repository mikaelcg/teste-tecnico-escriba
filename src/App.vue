<template>
  <v-app class="App">
    <v-main>
      <Modal />
      <Snackbar />

      <!-- Componentes de Layout -->
      <NavigationDrawer />
      <AppBar />

      <v-container>
        <PageHeader />
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
const NavigationDrawer = () =>
  import("@/components/LayoutComponents/NavigationDrawer.vue");

const AppBar = () => import("@/components/LayoutComponents/AppBar.vue");

const PageHeader = () => import("@/components/LayoutComponents/PageHeader.vue");

const Snackbar = () => import("@/components/Snackbar");

const Modal = () => import("@/components/Modal");

export default {
  name: "App",

  components: { NavigationDrawer, AppBar, Snackbar, Modal, PageHeader },
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
