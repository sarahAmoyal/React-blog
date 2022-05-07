import httpService from "./httpService";
import config from "../config.json";
import jwtDecode from "jwt-decode";

const TOKEN_KEY = "token";

httpService.setDefaultCommonHeaders("x-auth-token", getjwt());

export function createUser(user) {
  return httpService.post(`${config.apiUrl}/users`, user);
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
}
export function getjwt() {
  return localStorage.getItem(TOKEN_KEY);
}

export function getUser() {
  const token = getjwt();
  try {
    return jwtDecode(token);
  } catch {
    return null;
  }
}
export async function login(email, password) {
  const { data } = await httpService.post(`${config.apiUrl}/auth`, {
    email,
    password,
  });
  localStorage.setItem(TOKEN_KEY, data.token);
}

const service = {
  createUser,
  login,
  logout,
  getjwt,
  getUser,
};
export default service;
