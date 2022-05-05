/* ----- IMPORT:PACKAGES------------------------- */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import store from "./shared";
import VuePlyr from "vue-plyr";

/* ----- IMPORT:STYLES------------------------- */
import "./assets/scss/core/_import.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/static/_import.scss";
import "vue-plyr/dist/vue-plyr.css";

/* ----- CREATE:APP------------------------- */
createApp(App).use(router).use(store).use(VuePlyr).mount("#app");

