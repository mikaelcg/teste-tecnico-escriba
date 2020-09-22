import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

//Modules
import Snackbar from "@/store/Snackbar";
import NavigationDrawer from "@/store/NavigationDrawer";
import User from "@/store/User";

export default new Vuex.Store({
  modules: {
    Snackbar,
    NavigationDrawer,
    User
  }
});
