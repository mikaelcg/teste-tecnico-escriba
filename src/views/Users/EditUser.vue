<template>
  <section class="EditUser">
    <UserDataForm v-if="user" :user="user" :action="updateUser" showDelete />
  </section>
</template>

<script>
const UserDataForm = () => import("@/components/Forms/UserDataForm");

import { mapActions } from "vuex";

export default {
  name: "EditUser",

  components: { UserDataForm },

  data: () => ({
    user: null
  }),

  computed: {
    userId() {
      return this.$route.params.id;
    }
  },

  async created() {
    await this.handleGetUser();
  },

  methods: {
    ...mapActions("User", {
      getUser: "getUser",
      updateUser: "updateUser"
    }),

    async handleGetUser() {
      const userData = await this.getUser(this.userId);

      this.user = { ...userData };
    }
  },
  watch: {}
};
</script>

<style lang="scss" scoped>
.AddUser {
}
</style>
