// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDRsXPp0m3ZWcHQvfjbkR2j_5kQvv1o43c",
    authDomain: "my-dev-project63.firebaseapp.com",
    projectId: "my-dev-project63",
    storageBucket: "my-dev-project63.appspot.com",
    messagingSenderId: "195020157026",
    appId: "1:195020157026:web:081336f9424a104610213b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;