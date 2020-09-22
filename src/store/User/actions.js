import users from "@/api/users.js";
import router from "@/router";

export default {
  async getUsers({ commit, dispatch }) {
    try {
      const { data } = await users.get();

      return commit("SET_USERS", data);
    } catch (error) {
      dispatch(
        "Snackbar/setSnackbar",
        {
          status: true,
          text: `Erro ao buscar usuários`,
          type: "error"
        },
        {
          root: true
        }
      );
      console.error(error);
    }
  },

  async getUser({ dispatch }, payload) {
    try {
      const { data } = await users.get(payload);

      return data;
    } catch (error) {
      dispatch(
        "Snackbar/setSnackbar",
        {
          status: true,
          text: `Erro ao buscar usuário`,
          type: "error"
        },
        {
          root: true
        }
      );
      console.error(error);
    }
  },

  async addUser({ dispatch }, payload) {
    try {
      await users.post(payload);

      await dispatch(
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

      return router.push("/");
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
  },

  async updateUser({ dispatch }, payload) {
    try {
      await users.put(payload);

      await dispatch(
        "Snackbar/setSnackbar",
        {
          status: true,
          text: `Usuário atualizado com sucesso`,
          type: "success"
        },
        {
          root: true
        }
      );

      return router.push("/");
    } catch (error) {
      console.error(error);

      dispatch(
        "Snackbar/setSnackbar",
        {
          status: true,
          text: `Erro ao atualizar usuário`,
          type: "error"
        },
        {
          root: true
        }
      );
    }
  },

  async deleteUser({ dispatch }, payload) {
    try {
      await dispatch(
        "Modal/setModal",
        {
          status: true,
          title: "Deseja mesmo deletar este usuario?",
          text: "Esta ação não poderá ser desfeita!",
          action: async () => {
            await users.deleteUser(payload);

            await dispatch("getUsers");

            await dispatch(
              "Snackbar/setSnackbar",
              {
                status: true,
                text: "Usuario excluido com sucesso",
                type: "success"
              },
              {
                root: true
              }
            );

            if (router.history.current.path !== "/") router.push("/");

            return;
          }
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
          text: `Erro ao excluir usuário`,
          type: "error"
        },
        {
          root: true
        }
      );
    }
  }
};
