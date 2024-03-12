import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import VueClickAway from "vue3-click-away";
import V3ScrollLock from "v3-scroll-lock";

import "./assets/styles/base.scss";

const pinia = createPinia();

createApp(App)
  .use(pinia)
  .use(router)
  .use(VueClickAway)
  .use(V3ScrollLock, {})
  .mount("#app");
