import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase';

import "semantic-ui-css/semantic.min.css";

Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "*************",
  authDomain: "*************",
  databaseURL: "*************",
  projectId: "*************",
  storageBucket: "*************",
  messagingSenderId: "*************",
  appId: "*************",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
