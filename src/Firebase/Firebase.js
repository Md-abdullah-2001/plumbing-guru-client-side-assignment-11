// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzvPLe5BxJLEZhRJyvHs2_E1FBajRuRjU",
  authDomain: "plumbing-review.firebaseapp.com",
  projectId: "plumbing-review",
  storageBucket: "plumbing-review.appspot.com",
  messagingSenderId: "306936521997",
  appId: "1:306936521997:web:0e0c04cd38ad662a393c44",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
