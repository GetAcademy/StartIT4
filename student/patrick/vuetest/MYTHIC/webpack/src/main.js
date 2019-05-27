import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

var app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

app.mixin(
  {
    data: function ()
    {
      return{
        db: firebase.firestore(),
        storage: firebase.storage(),

        storageRef: storage.ref(),

        imagesRef: storageRef.child('images'),

        spaceRef: storageRef.child('images/space.jpg'),
      }
    },
    methods: 
    {
      RandomNumber: function (min, max)
      {
      return Math.floor(Math.random() * (max - min) + min)
      }
    },
  })
