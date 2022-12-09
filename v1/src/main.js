import { createApp } from 'vue'
import App from './App.vue'
import store from './Store'
import { library } from '@fortawesome/fontawesome-svg-core'
import routes from './Components/Router'

import { faHatWizard , faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHatWizard , faEllipsisVertical)


createApp(App).component('font-awesome-icon', FontAwesomeIcon)
.use(store).use(routes).mount('#app')
