import { signInWithGooglePopup, createUserAuthFromDocument } from "../../utils/firebase/firebase.util";
const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserAuthFromDocument(user);
    };

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign In With Google Popup</button>
        </div>
    );
}

export default SignIn;