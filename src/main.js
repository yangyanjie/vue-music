import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
//import router from './router'

/* eslint-disable no-unused-vars */
// import vConsole from 'vconsole'

//fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

