import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyCUihMSIRFy8DLmSf2matL-tl53rZw53sM",
  authDomain: "ourexamhelper-1.firebaseapp.com",
  projectId: "ourexamhelper-1",
  storageBucket: "ourexamhelper-1.appspot.com",
  messagingSenderId: "446478811243",
  appId: "1:446478811243:web:8423a71702fecf830f312e",
  measurementId: "G-GYVJY81DBB"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
