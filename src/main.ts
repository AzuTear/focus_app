import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import App from "./App.vue";
import router from "./router";
import Button from "primevue/button";

const app = createApp(App);

app.component("AppButton", Button);

app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

app.mount("#app");
