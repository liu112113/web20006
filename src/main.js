import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import jwt from "jwt-decode"
import "./router/permission"
import './plugins/element.js'
import "./plugins/MyComponents.js"
import "./assets/css/common.css"
import "./utils/eventbus"


if(localStorage.getItem("ego")){
  store.commit("loginModule/setUser",{
    username:jwt(localStorage.getItem("ego")).username,
    token:localStorage.getItem("ego")
  })
}


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
