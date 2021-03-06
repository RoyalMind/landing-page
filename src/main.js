import { createApp } from "vue"
import App from "./App.vue"
import Router from "./router"

import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

createApp(App)
    .use(Router)
    .mount("#app")
