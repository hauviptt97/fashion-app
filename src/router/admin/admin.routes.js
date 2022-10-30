import { Layout, AdminHome,AdminLayout } from "@/views/admin/index";
import employeeRoutes from "./employee/employee.routes";
import distributorRoutes from "./distributor/distributor.routes";
import paymentRoutes from "./payment/payment.routes";
import statisticsRoutes from "./statistics/statistics.routes";

export default {
  path: "/admin",
  component: AdminLayout,
  children: [
    { path: "", name: "AdminHome", component: AdminHome },
    { ...employeeRoutes },
    { ...distributorRoutes },
    { ...paymentRoutes },
    { ...statisticsRoutes },
  ],
};
