import {
  RevLayout,RevTime,RevEmp
} from "@/views/admin/statistics/index";

export default {
  path: "/admin/revenue",
  component: RevLayout,
  children: [
    { path: "time", name: "RevTime", component: RevTime },{ path: "employee", name: "RevEmp", component: RevEmp },
  ],
};
