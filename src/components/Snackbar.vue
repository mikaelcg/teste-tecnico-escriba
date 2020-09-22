<template>
  <v-snackbar v-model="snackbar.status" :color="snackbar.type" top>
    {{ snackbar.text }}
    <v-btn
      dark
      text
      @click="setSnackbar({ status: false, text: null, type: null })"
      >Fechar</v-btn
    >
  </v-snackbar>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Snackbar",
  components: {},
  props: {},
  data: () => ({
    status: false,
    message: null,
    type: null
  }),
  computed: {
    ...mapGetters("Snackbar", {
      snackbar: "getSnackbar"
    })
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    ...mapActions("Snackbar", {
      setSnackbar: "setSnackbar"
    })
  }
};
</script>

<style lang="scss" scoped>
//@import "@/assets/variables.scss";
</style>
