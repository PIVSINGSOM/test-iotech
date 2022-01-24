// import css 
import './assets/style.css'


import Vue from 'vue'
import App from './App.vue'
import VueGtag from "vue-gtag";

Vue.config.productionTip = false


Vue.use(VueGtag, {
  config: { id: "G-P3QHEKBCCV" }
});



new Vue({
  render: h => h(App),
}).$mount('#app')
