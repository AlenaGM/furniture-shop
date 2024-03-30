import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import V3ScrollLock from "v3-scroll-lock";

import "./assets/styles/base.scss";

const pinia = createPinia();

createApp(App).use(pinia).use(router).use(V3ScrollLock, {}).mount("#app");
