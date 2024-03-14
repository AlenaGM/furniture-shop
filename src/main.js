import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import VueClickAway from "vue3-click-away";

import "./assets/styles/base.scss";

const pinia = createPinia();

createApp(App).use(pinia).use(router).use(VueClickAway).mount("#app");
