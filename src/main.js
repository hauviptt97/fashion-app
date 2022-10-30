import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import { router } from "./router";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import { worker } from "./mocks/browser";
import mitt from "mitt";
import vue3JsonExcel from "vue3-json-excel";

const emitter = mitt();
const app = createApp(App);

const getImgUrl = (baseUrl, name) => {
  return new URL(baseUrl + name, import.meta.url);
};
if (process.env.NODE_ENV === "development") {
  worker.start();
}

app.provide("emitter", emitter);

app.config.globalProperties.$image = getImgUrl;

app.use(vue3JsonExcel).use(Antd).use(router).use(createPinia()).mount("#app");
