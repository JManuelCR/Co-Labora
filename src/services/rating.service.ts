import { getCookie } from "cookies-next";
import { fetchWrapper } from "./fetch-wrapper";
const apiUri = "https://co-labora-backend.jmanuelc.dev";
const token = getCookie("token");

export const ratingsService = {
  getAll,
  create,
  delete: _delete,
};

const baseUrl = `${apiUri}/rating`;

function getAll() {
  return fetchWrapper.getLogged(baseUrl, token);
}
function create(body: any) {
  return fetchWrapper.post(baseUrl, body, token);
}
function _delete(id: any) {
  return fetchWrapper.delete(`${baseUrl}/${id}`, token);
}
