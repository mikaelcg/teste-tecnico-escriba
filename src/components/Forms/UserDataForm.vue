<template>
  <v-form class="UserDataForm" ref="userDataForm" v-model="isFormValid">
    <TextField
      autofocus
      label="Nome"
      @input="val => (user.nome = val)"
      @keydown-enter="handleAction"
      :value="user.nome"
      preppendInnerIcon="mdi-account"
      :rules="nameRules"
      required
    />

    <TextField
      label="CPF"
      :mask="'###.###.###-##'"
      preppendInnerIcon="mdi-card-account-details"
      :rules="cpfRules"
      @keydown-enter="handleAction"
      :value="user.cpf"
      @input="val => (user.cpf = val)"
    />

    <v-menu
      ref="datepicker"
      v-model="birthdayMenu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      min-width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <div v-bind="attrs" v-on="on">
          <TextField
            label="Data de nascimento"
            readonly
            @keydown-enter="handleAction"
            :rules="dataNascimentoRules"
            preppendInnerIcon="mdi-cake"
            :value="user.dataNascimento"
          />
        </div>
      </template>
      <v-date-picker
        ref="picker"
        v-model="dataNascimento"
        locale="pt-br"
        :max="new Date().toISOString().substr(0, 10)"
        min="1950-01-01"
        @change="saveDate"
      ></v-date-picker>
    </v-menu>

    <div class="UserDataForm__Actions">
      <Button
        v-if="showDelete"
        text="Excluir"
        outlined
        color="error"
        class="UserDataForm__Save"
        @click="deleteUser(user.id)"
        :loading="isLoading"
      />

      <Button
        text="Salvar"
        class="UserDataForm__Save"
        @click="handleAction"
        :loading="isLoading"
      />
    </div>
  </v-form>
</template>

<script>
const TextField = () => import("@/components/Forms/TextField");
const Button = () => import("@/components/Button");
import { mapActions } from "vuex";

export default {
  name: "UserDataForm",
  components: { TextField, Button },
  props: {
    user: { required: true, type: Object },
    action: { required: true, type: Function },
    showDelete: { required: false, type: Boolean, default: false }
  },
  data: () => ({
    isLoading: false,
    isFormValid: false,
    birthdayMenu: false,
    dataNascimento: "",
    nameRules: [v => !!v || "Nome obrigatório"],
    cpfRules: [
      v => !!v || "CPF obrigatório",
      // eslint-disable-next-line no-useless-escape
      v => /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(v) || "CPF Inválido"
    ],
    dataNascimentoRules: [v => !!v || "Data de nascimento obrigatória"]
  }),

  methods: {
    ...mapActions("User", {
      deleteUser: "deleteUser"
    }),

    saveDate(date) {
      this.$refs.datepicker.save(date);
    },

    async handleAction() {
      this.isLoading = true;

      await this.validateForm();

      if (!this.isFormValid) return (this.isLoading = false);

      await this.action(this.user);

      this.isLoading = false;
    },

    async validateForm() {
      await this.$refs.userDataForm.validate();
    },

    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    }
  },
  watch: {
    birthdayMenu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    },
    dataNascimento() {
      this.user.dataNascimento = this.formatDate(this.dataNascimento);
    }
  }
};
</script>

<style lang="scss" scoped>
.UserDataForm {
  &__Actions {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
