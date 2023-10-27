import { getCookie } from "cookies-next";
import { fetchWrapper } from "./fetch-wrapper";
const apiUri = "https://co-labora-backend.jmanuelc.dev";
const token = getCookie("token");

export const commentsService = {
  getAll,
  create,
  delete: _delete,
};

const baseUrl = `${apiUri}/comments`;

function getAll() {
  return fetchWrapper.getLogged(baseUrl, token);
}
function create(params: any) {
  return fetchWrapper.post(baseUrl, params, token);
}
function _delete(id: any) {
  return fetchWrapper.delete(`${baseUrl}/${id}`, token);
}
