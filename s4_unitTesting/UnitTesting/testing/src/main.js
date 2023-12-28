import Vue from "vue";
import App from "./App.vue";
// import router from "./router";
// import store from "./store";

let app;

  if (!app) {
    app = new Vue({
      // router,
      // store,
      render: h => h(App)
    }).$mount("#app");
  }

