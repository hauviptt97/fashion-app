import { http } from "@/http-common";

export function getAll() {
  return http.get("/users").then((res) => {
    return res.data;
  });
}

export function getUserById(id) {
  return http.get("/users/" + id).then((res) => {
    return res.data;
  });
}

export function deleteUserById(id) {
  return http.delete("/users/" + id).then((res) => {
    return res.data;
  });
}
