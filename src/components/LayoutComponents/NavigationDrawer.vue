<template>
  <v-navigation-drawer
    class="NavigationDrawer"
    :value="navigationDrawer"
    app
    temporary
    dense
    @input="handleNavigationDrawer()"
  >
    <v-list dense>
      <template v-for="(item, index) in menuItems">
        <v-list-item :key="index" :to="item.to" link>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "NavigationDrawer",
  components: {},
  props: {},
  data: () => ({
    menuItems: [
      {
        icon: "mdi-account-outline",
        text: "Usuários",
        to: "/usuarios"
      },
      {
        icon: "mdi-domain",
        text: "Novo Usuário",
        to: "/usuarios/novo"
      }
    ]
  }),
  computed: {
    ...mapGetters("NavigationDrawer", {
      navigationDrawer: "getNavigationDrawerStatus"
    })
  },

  created() {},
  mounted() {},
  methods: {
    ...mapMutations("NavigationDrawer", {
      setNavigationDrawer: "setNavigationDrawer"
    }),

    handleNavigationDrawer() {
      if (this.navigationDrawer) {
        this.setNavigationDrawer(null);
      }
    }
  },
  watch: {}
};
</script>

<style lang="scss" scoped></style>
