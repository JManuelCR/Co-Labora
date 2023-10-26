import { fetchWrapper } from "./fetch-wrapper";
const apiUri =  'https://co-labora-backend.jmanuelc.dev';
const token = localStorage.getItem('token')

export const userService = {
  getAll,
  getById,
  create,
  update,
  delete: _delete
};

const baseUrl = `${apiUri}/users`

function getAll(){
  return fetchWrapper.get(baseUrl);
}
function getById(id: any){
  return fetchWrapper.get(`${baseUrl}/${id}`)
}
function create(body: any){
  return fetchWrapper.post(baseUrl, body, token);
}
function update(params: any, id: any){
  return fetchWrapper.patch(`${baseUrl}/${id}`, params, token);
}
function _delete(id: any){
  return fetchWrapper.delete(`${baseUrl}/${id}`, token)
}