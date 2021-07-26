import firebase from "firebase';"


const firebaseConfig = {
  apiKey: "AIzaSyCWo-bMJXqtqcaMoMPObHDyaaqFCMnwbOk",
  authDomain: "ourexamhelper.firebaseapp.com",
  databaseURL: "https://ourexamhelper-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ourexamhelper",
  storageBucket: "ourexamhelper.appspot.com",
  messagingSenderId: "483289874491",
  appId: "1:483289874491:web:a325bccdb790ffff6a9c1e",
  measurementId: "G-QD8VWDJ2P6"
};


firebase.initializeApp(firebaseConfig);

export default firebase;
