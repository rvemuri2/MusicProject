import { createApp } from "vue";
import { createPinia } from "pinia";
import VeeValidatePlugin from "./includes/validation";
import App from "./App.vue";
import router from "./router";

import "./assets/base.css";
import "./assets/main.css";
import { auth } from "./includes/firebase";
import Icon from "./directives/icon";

let app;
auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);

    app.use(createPinia());
    app.use(router);
    app.use(VeeValidatePlugin);
    app.directive("icon", Icon);
    app.mount("#app");
  }
});
