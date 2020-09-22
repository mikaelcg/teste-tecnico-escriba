<template>
  <section class="UsersList">
    <Table
      :items="users"
      icon="mdi-dots-horizontal"
      :headers="headers"
      :loading="isLoading"
      :actions="actionsList"
      @onRowClick="editUser"
      itemKey="id"
    />
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
const Table = () => import("@/components/Table");
export default {
  name: "UsersList",
  components: { Table },
  props: {},
  data: () => ({
    isLoading: false,

    headers: [
      {
        text: "ID",
        align: "start",
        sortable: true,
        value: "id"
      },
      { text: "Nome", value: "nome" },
      { text: "CPF", value: "cpf", sortable: true },
      { text: "Data de nascimento", value: "dataNascimento" },
      { text: "", value: "actions", align: "end" }
    ]
  }),
  computed: {
    ...mapGetters("User", {
      users: "getUsers"
    }),

    actionsList() {
      return [
        {
          text: "Editar",
          icon: "mdi-pencil",
          action: user => this.editUser(user)
        },
        {
          text: "Excluir",
          icon: "mdi-delete",
          action: async user => await this.deleteUser(user)
        }
      ];
    }
  },
  async created() {
    this.isLoading = true;
    await this.getUsers();
    this.isLoading = false;
  },
  mounted() {},
  methods: {
    ...mapActions("User", {
      getUsers: "getUsers",
      deleteUser: "deleteUser"
    }),

    editUser(user) {
      this.$router.push(`/usuarios/${user.id}`);
    }
  },
  watch: {}
};
</script>

<style lang="scss" scoped>
//@import "@/assets/variables.scss";
</style>
