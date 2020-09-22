export default {
  async setModal({ commit }, payload) {
    try {
      await commit("SET_MODAL", payload);
    } catch (error) {
      console.error(error)
    }
  },
};
