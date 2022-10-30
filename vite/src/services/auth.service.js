import { http } from "@/http-common";

export default function login(username, password) {
  return http
    .post("/account/login", { username, password })
    .then((response) => {
      return response.data;
    });
}
