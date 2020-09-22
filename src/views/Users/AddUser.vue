<template>
  <section class="AddUser">
    <UserDataForm :user="user" :action="addUser" />
  </section>
</template>

<script>
const UserDataForm = () => import("@/components/Forms/UserDataForm");

import { mapActions } from "vuex";

export default {
  name: "AddUser",
  components: { UserDataForm },
  props: {},
  data: () => ({
    user: {
      nome: null,
      cpf: null,
      dataNascimento: null
    }
  }),
  computed: {},
  created() {},
  mounted() {},
  methods: {
    ...mapActions("User", {
      addUser: "addUser"
    })
  },
  watch: {}
};
</script>

<style lang="scss" scoped>
.AddUser {
}
</style>
