// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, Auth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCflbe-mc64DYB2BaUg_cq8F51lAj5-CRg",
  authDomain: "elite-heaven.firebaseapp.com",
  projectId: "elite-heaven",
  storageBucket: "elite-heaven.appspot.com",
  messagingSenderId: "286832932312",
  appId: "1:286832932312:web:a7315b64dee02e6069eead",
  measurementId: "G-R31E4L2C9C"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth: Auth = getAuth(app);
