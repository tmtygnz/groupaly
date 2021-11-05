import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
} from "firebase/auth";
import { useUser } from "../context/UserContext";
import axios from "axios";

let firebaseConfig;
let app;
let db;

export const init = (key: string) => {
  const unHashed = Buffer.from(key, "base64").toString("binary");
  firebaseConfig = JSON.parse(unHashed);
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
};

export const signUpWithGoogle = async (): Promise<string> => {
  const gProvider = new GoogleAuthProvider();
  const auth = getAuth();
  let popup = await signInWithPopup(auth, gProvider);
  let createResp = await axios.post(`http://localhost:3001/users/create?userName`, {}, {headers: {
    "userName": popup.user.displayName!,
    "userID": popup.user.uid!,
    "profURL": popup.user.photoURL!
  }});
  console.log(popup);
  console.log(createResp);
  return popup.user.uid;

};

export const signUpWithFacebook = async (): Promise<string> => {
  const fProvider = new FacebookAuthProvider();
  const auth = getAuth();
  let popup = await signInWithPopup(auth, fProvider);
  return popup.user.uid;
};
