import axios from "@/plugins/axios";

const get = async payload => await axios.post(`/api/user`, { ...payload });

export default {
  get
};
