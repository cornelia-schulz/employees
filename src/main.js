import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import './reset.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './main.css'


export const serverBus = new Vue()
Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  render: h => h(App),
})