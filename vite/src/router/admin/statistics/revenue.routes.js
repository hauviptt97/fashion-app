import { RevLayout, RevTime, RevEmp } from "@/views/admin/statistics/index";

export default {
  path: "/admin/statistic/revenue",
  component: RevLayout,
  children: [
    {
      path: "/admin/statistic/revenue/time",
      name: "RevTime",
      component: RevTime,
    },
    {
      path: "/admin/statistic/revenue/employee",
      name: "RevEmp",
      component: RevEmp,
      props: true,
    },
  ],
};
