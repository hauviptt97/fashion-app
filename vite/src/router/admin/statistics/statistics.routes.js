import { AdminLayout } from "@/views/admin/index";
import revenueRoutes from "./revenue.routes";
import customerRoutes from "./customer.routes";

export default {
  path: "/admin/statistic",
  component: null,
  children: [{ ...revenueRoutes }, { ...customerRoutes }],
};
