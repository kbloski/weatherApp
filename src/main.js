import { createApp, defineAsyncComponent} from 'vue'
import App from './App.vue'
import router from './router'
import store from './storage'

const BaseLoading = defineAsyncComponent( ()=> import("./components/UI/BaseLoading.vue"))
const BaseSearch = defineAsyncComponent( () => import('./components/UI/BaseSearch.vue'))

const app = createApp(App)

app.component('base-loading', BaseLoading)
app.component('base-search', BaseSearch)
app.use( router )
app.use( store )

app.mount('#app')
