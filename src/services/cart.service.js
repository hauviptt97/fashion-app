import { http } from "@/http-common";

export function getAll() {
  return http.get("/cart").then((res) => {
    return res.data;
  });
}

export function deleteById(id) {
  return http.delete("/cart/" + id).then((res) => {
    return res.data;
  });
}
