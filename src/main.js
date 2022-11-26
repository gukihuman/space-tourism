import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import { createPinia } from "pinia";

const pinia = createPinia();

createApp(App).use(pinia).use(router).mount("#app");