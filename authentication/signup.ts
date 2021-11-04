import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useUser } from "../context/UserContext";

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
  return popup.user.uid;
};

export const signUpWithFacebook = async (): Promise<string> => {
  const fProvider = new FacebookAuthProvider();
  const auth = getAuth();
  let popup = await signInWithPopup(auth, fProvider);
  return popup.user.uid;
};
