import { fetchWrapper } from "./fetch-wrapper";
const apiUri =  'https://co-labora-backend.jmanuelc.dev';

export const loginService = {
  login
}

const baseUrl = `${apiUri}/login`;

function login(body: any){
  return fetchWrapper.login(baseUrl, body);
}