// Import the functions you need from the SDKs you need
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import {doc, getDoc, setDoc,getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
 prompt : "select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth,provider);

export const db = getFirestore();

export const createUserAuthFromDocument = async(userAuth) => {
    const userDocRef = doc(db,'users',userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    if(!userSnapshot.exists()){
        const {displayName,email} = userAuth;
        const createdAt = new Date();
        try{
            await setDoc(userDocRef,{displayName,email,createdAt})
        }catch(error){
            console.log('error creating the user',userDocRef)
        }
    }

    return userDocRef;
}