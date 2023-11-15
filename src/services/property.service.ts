import { getCookie } from "cookies-next";
import { fetchWrapper } from "./fetch-wrapper";
const apiUri = "https://co-labora-backend.jmanuelc.dev";
const token = getCookie("token");

export const propertyService = {
  getAll,
  getById,
  getByFilter,
  getByPreferences,
  create,
  update,
  delete: _delete,
};

const baseUrl = `${apiUri}/property`;

function getAll() {
  return fetchWrapper.get(baseUrl);
}
function getById(id: any) {
  return fetchWrapper.get(`${baseUrl}/${id}`);
}
function getByFilter(filter: any){
  return fetchWrapper.get(`${baseUrl}/filterByInput/${filter}`)
}
function getByPreferences(body: any){
  return fetchWrapper.getBody(`${baseUrl}/'filterByPreferences`, body)
}
function create(body: any) {
  return fetchWrapper.postProperty(baseUrl, body, token);
}
function update(params: any, id: any) {
  return fetchWrapper.patch(`${baseUrl}/${id}`, params, token);
}
function _delete(id: any) {
  return fetchWrapper.delete(`${baseUrl}/${id}`, token);
}
