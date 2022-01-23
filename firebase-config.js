// import * as firebase from "firebase"
// import "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyC4C2rzW_ueHtemRkXLktc1vdGfo0LGg9s",
//   authDomain: "myparty-8764e.firebaseapp.com",
//   projectId: "myparty-8764e",
//   storageBucket: "myparty-8764e.appspot.com",
//   messagingSenderId: "977016105",
//   appId: "1:977016105:web:53bf01fb078d8a19835338",
//   measurementId: "G-21N27R14MZ",
// };

// // Initialize Firebase
// if (firebase.apps.length === 0){
//   firebase.initializeApp(firebaseConfig);
// }
// export const db = getFirestore(app);
// export const auth = getAuth(app);

import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4C2rzW_ueHtemRkXLktc1vdGfo0LGg9s",
  authDomain: "myparty-8764e.firebaseapp.com",
  projectId: "myparty-8764e",
  storageBucket: "myparty-8764e.appspot.com",
  messagingSenderId: "977016105",
  appId: "1:977016105:web:53bf01fb078d8a19835338",
  measurementId: "G-21N27R14MZ",
};

// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
export const db = firebase.firestore();
