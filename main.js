import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase';

import "semantic-ui-css/semantic.min.css";

Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAO9CtuAgWPicVEQO-ruVgtwSphBhZky1w",
  authDomain: "my-sample-project-64f92.firebaseapp.com",
  databaseURL: "https://my-sample-project-64f92.firebaseio.com",
  projectId: "my-sample-project-64f92",
  storageBucket: "my-sample-project-64f92.appspot.com",
  messagingSenderId: "317275958280",
  appId: "1:317275958280:web:55c00a3601d380e0bf75bd"
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
