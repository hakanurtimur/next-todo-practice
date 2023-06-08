import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDlTcEaOR21isj2qiHbM4K_2H6g5lk92R0",
    authDomain: "react-http-3a15e.firebaseapp.com",
    databaseURL: "https://react-http-3a15e-default-rtdb.firebaseio.com",
    projectId: "react-http-3a15e",
    storageBucket: "react-http-3a15e.appspot.com",
    messagingSenderId: "621586034439",
    appId: "1:621586034439:web:7bc3dc5ec99aa2ba07dfa2"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();