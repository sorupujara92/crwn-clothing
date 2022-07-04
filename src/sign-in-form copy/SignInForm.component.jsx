import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import './SignInForm.styles.scss'
import Button from "../button/button.component";
import { auth, signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../utils/firebase/firebase.util";

const defaultFormFields = {
    'email' : '',
    'password' : ''
};
const SignInForm = () => {

    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };


    const[formFields,setFormFields] = useState(defaultFormFields);
    const {email,password} = formFields;
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name] : value });
    };
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {   
            const response = await signInAuthUserWithEmailAndPassword(email,password);
            console.log(response);
            resetFormFields();
        }catch(error){
            switch(error.code){
                case "auth/wrong-password":
                    alert("incorrect password for email");
                    break;
                case "auth/user-not-found":
                    alert("no user associated with this email");
                    break;
                default : 
                    console.log(error);    
            }
    
        }
        
    }

    return (
        <div className="sign-up-container">
            <h2>Already have an account ?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
            <FormInput  type="email" label="Email" required onChange={handleChange}  value={email} name='email' ></FormInput>
            <FormInput type="password" label="password" required onChange={handleChange}  value={password} name='password' ></FormInput>
            <div className="buttons-container">
            <Button type="submit">Sign In</Button>
            <Button type="button" buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
            </div>
            </form>
        </div>
    )
}

export default SignInForm;