<template>
  <section class="UsersList">
    <Table
      :items="users"
      :headers="headers"
      :loading="isLoading"
      :action="editUser"
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
    })
  },
  async created() {
    this.isLoading = true;
    await this.getUsers();
    this.isLoading = false;
  },
  mounted() {},
  methods: {
    ...mapActions("User", {
      getUsers: "getUsers"
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
