import { Layout, Login, Register } from "@/views/account/index";

//const Home = { template: "<div>Home</div>" };

export default {
  path: "/account",
  component: Layout,
  children: [
    { path: "login", name: "Login", component: Login },
    { path: "register", component: Register },
  ],
};
