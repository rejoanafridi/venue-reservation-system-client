
// Initialize Firebase
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig/firebase.Config";

const initializationApp = () => {
  initializeApp(firebaseConfig);
};

export default initializationApp;

