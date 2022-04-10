// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA0k8AwTg4D8NeUcCktcKUTLLBxvflVgIY',
  authDomain: 'email-password-auth-my.firebaseapp.com',
  projectId: 'email-password-auth-my',
  storageBucket: 'email-password-auth-my.appspot.com',
  messagingSenderId: '1026301389573',
  appId: '1:1026301389573:web:e5f3908b0364864626e56c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
