import SignUpForm from "../../sign-up-form/SignUpForm.component";
import SignInForm from "../../sign-in-form copy/SignInForm.component";
import './authentication.styles.scss'
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

    return (
        <div className="authentication-container">
            <SignInForm></SignInForm>
            <SignUpForm></SignUpForm>
            {/* <button onClick={signInWithGoogleRedirect}>Sign In With Google Redirect</button> */}
        </div>
    );
}

export default SignIn;