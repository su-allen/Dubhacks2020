import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyDTgDcPMa1ZeHYQ4Bl52EG0Z7ITZxutJ9Y",
  authDomain: "dubhacks-46283.firebaseapp.com",
  databaseURL: "https://dubhacks-46283.firebaseio.com",
  projectId: "dubhacks-46283",
  storageBucket: "dubhacks-46283.appspot.com",
  messagingSenderId: "638139960369",
  appId: "1:638139960369:web:8a616117bf3d8eb70d9910",
  measurementId: "G-9X6KV31Z3C"
};
// Initialize Firebase
firebase.initializeApp(config);
export default firebase;