import axios from "@/plugins/axios";

const get = async payload =>
  await axios.get(`/pessoas${payload ? `/${payload}` : ""}`);

const post = async payload => await axios.post(`/pessoas`, { ...payload });

const put = async payload =>
  await axios.put(`/pessoas/${payload.id}`, { ...payload });

const deleteUser = async payload => await axios.delete(`/pessoas/${payload}`);

export default {
  get,
  put,
  post,
  deleteUser
};
