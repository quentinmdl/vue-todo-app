import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// Font awesome
import { library, dom } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faPenToSquare, faTrash);
dom.watch();

const app = createApp(App);

app.use(createPinia());
app.use(router);
// app.component("font-awesome-icon", FontAwesomeIcon)
app.mount("#app");
