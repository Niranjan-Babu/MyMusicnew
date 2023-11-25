// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdfrqD1axCi722Dt66jySe4Vr_Yr6i8PI",
  authDomain: "mymusic-df1c1.firebaseapp.com",
  projectId: "mymusic-df1c1",
  storageBucket: "mymusic-df1c1.appspot.com",
  messagingSenderId: "389789019237",
  appId: "1:389789019237:web:7c00b70d6f8b0f5904aa8c",
  measurementId: "G-98VPCJJG9N"
};

const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export default storage