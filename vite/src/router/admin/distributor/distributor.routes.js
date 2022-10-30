import {
  ListDistributor,
  DistributorDetail,
  DisLayout,
} from "@/views/admin/distributor/index";

export default {
  path: "/admin/distributors",
  component: DisLayout,
  children: [
    { path: "", name: "ListDistributor", component: ListDistributor },
    { path: "detail", name: "DistributorDetail", component: DistributorDetail },
  ],
};
