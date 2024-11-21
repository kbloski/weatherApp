import { createApp, defineAsyncComponent} from 'vue'
import App from './App.vue'
import router from './router'

const BaseLoading = defineAsyncComponent( ()=> import("./components/UI/BaseLoading.vue"))

const app = createApp(App)

app.component('base-loading', BaseLoading)
app.use(router)

app.mount('#app')
