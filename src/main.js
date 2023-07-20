/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

import "vue3-easy-data-table/dist/style.css"

// Components
import App from "./App.vue"
import Vue3EasyDataTable from "vue3-easy-data-table"
// Composables
import { createApp } from "vue"
import { createPinia } from "pinia"
// Plugins
import { registerPlugins } from "@/plugins"

const app = createApp(App)
app.use(createPinia())
app.component("EasyDataTable", Vue3EasyDataTable)

registerPlugins(app)

app.mount("#app")
