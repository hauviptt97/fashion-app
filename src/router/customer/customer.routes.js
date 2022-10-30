import {
  Layout,
  AboutMe,
  HomePage,
  Kid,
  Man,
  Products,
  Support,
  Woman,
  Cart,
  ProductDetail,
} from "@/views/customer/index";

export default {
  path: "/",
  component: Layout,
  children: [
    { path: "", name: "HomePage", component: HomePage },
    { path: "/products", name: "Products", component: Products },
    {
      path: "/products/:productId",
      name: "ProductDetail",
      component: ProductDetail,
    },
    { path: "/woman", name: "Woman", component: Woman },
    { path: "/man", name: "Man", component: Man },
    { path: "/kid", name: "Kid", component: Kid },
    { path: "/support", name: "Support", component: Support },
    { path: "/aboutme", name: "AboutMe", component: AboutMe },
    { path: "/cart", name: "Cart", component: Cart },
  ],
};
