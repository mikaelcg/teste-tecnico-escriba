<template>
  <section class="AddUser">
    <v-form>
      <TextField label="Nome" @input="val => (user.name = val)" />

      <TextField
        label="CPF"
        :mask="'###.###.###-##'"
        @input="val => (user.cpf = val)"
      />

      <TextField
        label="Data de nascimento"
        @input="val => (user.birthday = val)"
      />

      <Button text="Salvar" class="AddUser__Save" @click="addUser(user)" />
    </v-form>
  </section>
</template>

<script>
const TextField = () => import("@/components/Forms/TextField");
const Button = () => import("@/components/Button");
import { mapActions } from "vuex";
export default {
  name: "AddUser",
  components: { TextField, Button },
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
  &__Save {
    float: right;
  }
}
</style>
