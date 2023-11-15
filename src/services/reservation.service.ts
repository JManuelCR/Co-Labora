import { getCookie } from "cookies-next";
import { fetchWrapper } from "./fetch-wrapper";
const apiUri = "https://co-labora-backend.jmanuelc.dev";
const token = getCookie("token");

export const reservationService = {
  create,
};

const baseUrl = `${apiUri}/reservation`;

function create(body: any) {
  return fetchWrapper.post(baseUrl, body, token);
}
