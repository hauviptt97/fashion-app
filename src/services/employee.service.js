import { http } from "@/http-common";

export function getAll() {
  return http.get("/employees").then((res) => {
    return res.data;
  });
}

export function getEmployeeById(id) {
  return http.get("/employees/" + id).then((res) => {
    return res.data;
  });
}

export function deleteById(id) {
  return http.delete("/employees/" + id).then((res) => {
    return res.data;
  });
}
