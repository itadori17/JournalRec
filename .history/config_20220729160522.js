import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/'


export const firebaseConfig = {
    apiKey: "AIzaSyAFFzdHC_xjV6c9zj-F2pT2auB7UXbi-Xw",
    authDomain: "myjournal-b1783.firebaseapp.com",
    projectId: "myjournal-b1783",
    storageBucket: "myjournal-b1783.appspot.com",
    messagingSenderId: "781497666091",
    appId: "1:781497666091:web:ff354079df8ecf5d46786e"
  };

  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);

  }