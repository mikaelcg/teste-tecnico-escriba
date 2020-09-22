<template>
  <v-dialog v-model="dialog" width="480">
    <v-card>
      <v-card-title>
        {{ modal.title }}
      </v-card-title>

      <v-card-text>
        {{ modal.text }}
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <Button
          text="Cancelar"
          outlined
          color="error"
          @click="dialog = false"
        />
        <Button
          text="Sim"
          @click="action"
          :loading="isLoading"
          color="primary"
        />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Button from "@/components/Buttons/Button";

export default {
  name: "Modal",
  components: { Button },
  props: {},
  data: () => ({
    dialog: false,
    isLoading: false
  }),
  computed: {
    ...mapGetters("Modal", {
      modal: "getModal"
    }),

    modalStatus() {
      return this.modal.status;
    }
  },
  created() {},
  mounted() {},
  methods: {
    ...mapActions("Modal", {
      setModal: "setModal"
    }),

    async action() {
      this.isLoading = true;

      await this.modal.action();

      this.isLoading = false;

      this.dialog = false;
    }
  },
  watch: {
    modalStatus() {
      if (!this.dialog) this.dialog = this.modalStatus;
    },
    dialog() {
      if (!this.dialog) {
        this.setModal({
          status: false,
          title: "",
          text: "",
          action: null
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
