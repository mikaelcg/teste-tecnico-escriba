<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :icon="icon"
    :loadingText="loadingText"
    :no-data-text="noDataText"
    :no-results-text="noResultsText"
    @click:row="onRowClick"
    :footer-props="{
      'items-per-page-text': 'Por página'
    }"
  >
    <template v-slot:item.actions="{ item }">
      <v-menu transition="slide-x-transition" bottom left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon color="accent" v-bind="attrs" v-on="on">
            <v-icon size="32">{{ icon }}</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            :key="key"
            v-for="(action, key) in actions"
            @click="action.action(item)"
          >
            <v-icon class="mr-2" small>{{ action.icon }}</v-icon>
            <v-list-item-title>{{ action.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
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
    icon: { required: false },
    items: { required: true },
    actions: { required: true, type: Array },
    loadingText: { required: false, default: "Carregando..." },
    noDataText: { required: false, default: "Não há registros" },
    noResultsText: { required: false, default: "Não há registros" }
  },
  data: () => ({}),
  computed: {},
  created() {},
  mounted() {},
  methods: {
    onRowClick(item) {
      this.$emit("onRowClick", item);
    }
  },
  watch: {}
};
</script>

<style lang="scss" scoped>
//@import "@/assets/variables.scss";
</style>
