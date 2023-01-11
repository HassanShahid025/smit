import { initializeApp } from "firebase/app";
import {addDoc, collection, getFirestore} from "@firebase/firestore";

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

//Courses Collection
export const coursesRef = collection(db,"courses"); 

//Registration Form
export const formCollection = collection(db, "Registration Form");
export const addForm = async (formData:any) => {
  const newForm = await addDoc(formCollection, {...formData});
  console.log(`form was added ${newForm.path}`)
}
