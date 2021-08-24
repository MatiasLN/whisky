import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBJdh5HQXypjt8x7FNyn3fMSw_AJO3Vpcs",
    authDomain: "whisky-c2f56.firebaseapp.com",
    databaseURL: "https://whisky-c2f56.firebaseio.com",
    projectId: "whisky-c2f56",
    storageBucket: "whisky-c2f56.appspot.com",
    messagingSenderId: "166359406379",
    appId: "1:166359406379:web:baa8f516ec1187e81fd76e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const provider = new firebase.auth.GoogleAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export const auth = firebase.auth();
export const signInWithGoogle = () => {
  auth
    .signInWithPopup(googleProvider)
    .then(() => {
      console.log("logged in");
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export const logOut = () => {
  auth
    .signOut()
    .then(() => {
      console.log("logged out");
      window.location.reload(false);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export { projectStorage, projectFirestore, provider, timestamp };
