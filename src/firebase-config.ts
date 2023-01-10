import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDlWN684trrclCjycSU9qYA8-KLlRmMBCE",
    authDomain: "smit-74ac1.firebaseapp.com",
    projectId: "smit-74ac1",
    storageBucket: "smit-74ac1.appspot.com",
    messagingSenderId: "252142073448",
    appId: "1:252142073448:web:dd13291babbe7a4f266ddd"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);