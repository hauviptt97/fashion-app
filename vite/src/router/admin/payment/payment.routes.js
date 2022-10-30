import {
  ListPayment,
  PaymentDetail,
  PayLayout,
} from "@/views/admin/payment/index";

export default {
  path: "/admin/payments",
  component: PayLayout,
  children: [
    { path: "list", name: "ListPayment", component: ListPayment },
    { path: "detail", name: "PaymentDetail", component: PaymentDetail },
  ],
};
