import { createApp } from "vue";
import { createRouter } from "./router/index";
import App from "./App.vue";

const router = createRouter();

const app = createApp(App);

app.use(router);
app.mount("#app");
