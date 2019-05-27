// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

Vue.config.productionTip = false

Vue.mixin(
  {
    methods:
    {
      RandomNumber: function (min, max)
      {
      return Math.floor(Math.random() * (max - min) + min)
      },
    },
  })

/* eslint-disable no-new */
 new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


