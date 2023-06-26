import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faS } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import store from './store'
library.add(faS)


const app = createApp(App);
app.use(router);
app.use(store)
app.mount("#app");

app.component('font-awesome-icon', FontAwesomeIcon)

 