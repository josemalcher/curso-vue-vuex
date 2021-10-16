import Vue from 'vue'
import App from './App.vue'
/*
// Importando o componente de maneura GLOBAL
import HeaderPrincipal from "./components/HeaderPrincipal";
Vue.component("HeaderPrincipal", HeaderPrincipal
*/

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
