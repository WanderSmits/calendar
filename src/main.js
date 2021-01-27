import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueTextareaAutosize from "vue-textarea-autosize";
import firebase from "firebase/app";
import "firebase/firestore";
Vue.config.productionTip = false;

Vue.use(VueTextareaAutosize);

firebase.initializeApp({
  apiKey: "AIzaSyBbWfvoAcZ_hbNI9klJ4Svlnn5ePRjIktI",
  authDomain: "nanny-761de.firebaseapp.com",
  databaseURL: "https://nanny-761de.firebaseio.com",
  projectId: "nanny-761de",
  storageBucket: "nanny-761de.appspot.com",
  messagingSenderId: "451312732629",
  appId: "1:451312732629:web:8776a90b8ac87932e5955c",
  measurementId: "G-YDCRK0JSP5",
});

// So you can import db into any file you want
export const db = firebase.firestore();

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
