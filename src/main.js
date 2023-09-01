import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router.js";
import "./assets/main.css";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDN6hsBnI9Ed3a-a1aR9b1iLO6GynpfgSs",
  authDomain: "playlist-app-7314f.firebaseapp.com",
  projectId: "playlist-app-7314f",
  storageBucket: "playlist-app-7314f.appspot.com",
  messagingSenderId: "512574930117",
  appId: "1:512574930117:web:79ed49352b60b4eeefc4ac",
};

initializeApp(firebaseConfig);
const app = createApp(App);
app.use(router);
app.mount("#app");
