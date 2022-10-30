import {
  ListEmployee,
  EmployeeDetail,
  EmpLayout,
} from "@/views/admin/employee/index";

export default {
  path: "/admin/employees",
  component: EmpLayout,
  children: [
    { path: "", name: "ListEmployee", component: ListEmployee },
    { path: "detail", name: "EmployeeDetail", component: EmployeeDetail },
  ],
};
