import users from "@/api/users.js";

export default {
  async getUsers({ commit, dispatch }) {
    try {
      const { data } = await users.get();

      dispatch(
        "Snackbar/setSnackbar",
        {
          status: true,
          text: `Sucesso`,
          type: "success"
        },
        {
          root: true
        }
      );

      return commit("SET_USERS", data);
    } catch (error) {
      console.error(error);
    }
  },

  async addUser({ dispatch }, payload) {
    try {
      await users.post(payload);

      dispatch(
        "Snackbar/setSnackbar",
        {
          status: true,
          text: `Usuário criado com sucesso`,
          type: "success"
        },
        {
          root: true
        }
      );

      return;
    } catch (error) {
      console.error(error);

      dispatch(
        "Snackbar/setSnackbar",
        {
          status: true,
          text: `Erro ao criar usuário`,
          type: "error"
        },
        {
          root: true
        }
      );
    }
  }
};
