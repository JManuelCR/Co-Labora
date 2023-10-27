import { getCookie } from "cookies-next";
import { fetchWrapper } from "./fetch-wrapper";
const apiUri = "https://co-labora-backend.jmanuelc.dev";
const token: any = getCookie("token");

export const notificationsService = {
  create,
  getAll,
  getById,
  delete: _delete,
};

const baseUrl = `${apiUri}/notification`;

function create(body: any) {
  return fetchWrapper.post(baseUrl, body, token);
}

function getAll() {
  return fetchWrapper.getLogged(baseUrl, token);
}

function getById(id: any) {
  return fetchWrapper.get(`${baseUrl}/${id}`);
}

function _delete(id: any) {
  return fetchWrapper.delete(`${baseUrl}/${id}`, token);
}
