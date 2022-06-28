import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { auth, signInWithGooglePopup, createUserAuthFromDocument, signInWithGoogleRedirect, createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.util";
import { async } from "@firebase/util";
import SignUpForm from "../../sign-up-form/SignUpForm.component";
const SignIn = () => {

    // useEffect(() => {
    //     async function signInWithRedirect() {
    //         const response = await getRedirectResult(auth);
    //         if(response){
    //             const userDocRef = await createUserAuthFromDocument(response.user);
    //         }
    //     }

    //     signInWithRedirect();
    // },[]);

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserAuthFromDocument(user);
    };


    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign In With Google Popup</button>
            <SignUpForm></SignUpForm>
            {/* <button onClick={signInWithGoogleRedirect}>Sign In With Google Redirect</button> */}
        </div>
    );
}

export default SignIn;