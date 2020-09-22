<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :footer-props="{
      'items-per-page-text': 'Por página'
    }"
  >
    <template v-slot:item.actions="{ item }">
      <v-icon @click="action(item)" color="primary">mdi-pencil</v-icon>
    </template>
    <template v-slot:footer.page-text="{ pageStart, pageStop, itemsLength }">
      {{ pageStart }} - {{ pageStop }} de {{ itemsLength }}
    </template>
  </v-data-table>
</template>

<script>
// import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  name: "Table",
  components: {},
  props: {
    headers: { required: true },
    loading: { required: true },
    itemKey: { required: true },
    items: { required: true },
    action: { required: true, type: Function },
    loadingText: { required: false, default: "Carregando..." },
    noDataText: { required: false, default: "Não há registros" },
    noResultsText: { required: false, default: "Não há registros" }
  },
  data: () => ({}),
  computed: {},
  created() {},
  mounted() {},
  methods: {},
  watch: {}
};
</script>

<style lang="scss" scoped>
//@import "@/assets/variables.scss";
</style>
