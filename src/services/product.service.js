import { http } from "@/http-common";

export function getAll() {
  return http.get("/products").then((res) => {
    return res.data;
  });
}

export function getProductById1(id) {
  return http.get("/products/" + id).then((res) => {
    return res.data;
  });
}

export function deleteById(id) {
  return http.delete("/products/" + id).then((res) => {
    return res.data;
  });
}
