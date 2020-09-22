import axios from "@/plugins/axios";

const get = async () => await axios.get(`/pessoas`);

const post = async payload => await axios.post(`/pessoas`, { ...payload });

export default {
  get,
  post
};
