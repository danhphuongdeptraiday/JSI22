// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  update,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJSnaFrRCBVMEP_oq_azJHvsYNALbDC-M",
  authDomain: "login-jsi22.firebaseapp.com",
  projectId: "login-jsi22",
  storageBucket: "login-jsi22.appspot.com",
  messagingSenderId: "140803186336",
  appId: "1:140803186336:web:71257e1b23ed401fc2f3c5",
  measurementId: "G-HGC1YVHNFZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

let username_login = document.getElementById("username_input_login");
let password_login = document.getElementById("password_input_login");
let username_register = document.getElementById("username_input_register");
let password_register = document.getElementById("password_input_register");
let login_btn = document.getElementById("login_btn");
let register_btn = document.getElementById("register_btn");

// Đăng ký 1 tài khoản
register_btn.addEventListener("click", function () {
  let username = username_register.value;
  let password = password_register.value;

  createUserWithEmailAndPassword(auth, username, password)
    .then((userCredential) => {
      const user = userCredential.user;
      set(ref(database, "user/" + user.uid), {
        username: username,
        password: password,
      });

      alert("Tạo tài khoản thành công");
    })
    .catch((err) => {
      const errorCode = err.code;
      const errorMess = err.message;

      alert(errorMess);
    });
});

// Đăng nhập 1 tải khoản có sẵn
login_btn.addEventListener("click", function () {
  let username = username_login.value;
  let password = password_login.value;

  signInWithEmailAndPassword(auth, username, password)
    .then((userCredential) => {
      const user = userCredential.user;
      let date = new Date();
      update(ref(database, "user/" + user.uid), {
        lastLogin: date,
      });
      localStorage.setItem("name", username);
      alert("Đăng nhập thành công");
    })
    .catch((err) => {
      const errorCode = err.code;
      const errorMess = err.message;

      alert(errorMess);
    });
});
