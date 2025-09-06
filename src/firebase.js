import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  


const firebaseConfig = {

  apiKey: "AIzaSyBK6DuKlWOFZP8cVIe-Qb8Z0mwPrSBSnyk",

  authDomain: "gameverse-c856e.firebaseapp.com",

  projectId: "gameverse-c856e",

  storageBucket: "gameverse-c856e.firebasestorage.app",

  messagingSenderId: "72311694050",

  appId: "1:72311694050:web:7fa685acea2790ffe8b4bb"

};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };