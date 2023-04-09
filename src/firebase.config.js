import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD3ZH_9jUpTzyEyHdl5TaXXDrDGW8L3vA8",
  authDomain: "houselistingapp.firebaseapp.com",
  projectId: "houselistingapp",
  storageBucket: "houselistingapp.appspot.com",
  messagingSenderId: "571220808381",
  appId: "1:571220808381:web:9fe677de707ae6c531ddd4",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
