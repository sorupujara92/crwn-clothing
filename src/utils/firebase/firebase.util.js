// Import the functions you need from the SDKs you need
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword } from 'firebase/auth'
import {doc, getDoc, setDoc,getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
 prompt : "select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider);

export const signInWithGoogleRedirect = () => signInWithRedirect(auth,googleProvider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth,additionalInformation = {}) => {
    const userDocRef = doc(db,'users',userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    if(!userSnapshot.exists()){
        const {displayName,email} = userAuth;
        const createdAt = new Date();
        try{
            await setDoc(userDocRef,{displayName,email,createdAt,...additionalInformation})
        }catch(error){
            console.log('error creating the user',userDocRef)
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async(email,password) => {

    if(!email || !password){
        return;
    }
    return await createUserWithEmailAndPassword(auth,email,password);
}