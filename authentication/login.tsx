import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

let firebaseConfig;
let app;
let db;

export const init = (key: string) => {
    const unHashed = Buffer.from(key, "base64").toString("binary");
    firebaseConfig = JSON.parse(unHashed);
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
}

export const loginWithGoogle = () => {
    const gProvider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, gProvider).then((res) => {
        console.log(res.user);
        return res.user;
    });
}
