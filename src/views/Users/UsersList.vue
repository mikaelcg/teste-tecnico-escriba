<template>
  <section class="UsersList">
    <v-card>
      <v-card-title class="UsersList__TableTitle">
        Listagem de usuários cadastrados
        <v-spacer></v-spacer>

        <TextField
          id="search"
          name="search"
          clearable
          hideDetails
          label="Pesquisar"
          preppendInnerIcon="mdi-magnify"
          @input="val => (search = val)"
        />
      </v-card-title>
      <Table
        icon="mdi-dots-horizontal"
        itemKey="id"
        :search="search"
        :items="users"
        :headers="headers"
        :loading="isLoading"
        :actions="actionsList"
        @onRowClick="editUser"
      />
    </v-card>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
const Table = () => import("@/components/Table");
const TextField = () => import("@/components/Forms/TextField");
export default {
  name: "UsersList",
  components: { Table, TextField },
  props: {},
  data: () => ({
    isLoading: false,

    search: null,

    headers: [
      {
        text: "ID",
        align: "start",
        sortable: true,
        value: "id"
      },
      { text: "Nome", value: "nome", sortable: true },
      { text: "CPF", value: "cpf", sortable: true },
      { text: "Data de nascimento", value: "dataNascimento", sortable: true },
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
.UsersList {
  &__TableTitle {
    display: flex;
    align-items: center;
  }
}
</style>
