import { useState } from "react";
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from "../utils/firebase/firebase.util";
import FormInput from "../form-input/form-input.component";
import './SignUpForm.styles.scss'
import Button from "../button/button.component";
const defaultFormFields = {
    'displayName' : '',
    'email' : '',
    'password' : '',
    'confirmPassword' : ''
};
const SignUpForm = () => {


    const[formFields,setFormFields] = useState(defaultFormFields);
    const {displayName,email,password,confirmPassword} = formFields;
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name] : value });
    };
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword){
            alert("password do not match");
            return;
        }
        try {
            const {user} = await createAuthUserWithEmailAndPassword(email,password);
            const userDocRef = await createUserDocumentFromAuth(user,{displayName});
            resetFormFields();
        }catch(error){
            if(error.code==='auth/email-already-in-use'){
                alert('can not create user , email already in use');
            } else {
                console.log('user creation encountered an error', error);  
            }
        }
        
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account ?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
            <FormInput  type="text" label="Display Name" required onChange={handleChange}  value={displayName} name='displayName' ></FormInput>
            <FormInput  type="email" label="Email" required onChange={handleChange}  value={email} name='email' ></FormInput>
            <FormInput type="password" label="password" required onChange={handleChange}  value={password} name='password' ></FormInput>
            <FormInput type="password" label="Confirm password" required onChange={handleChange}  value={confirmPassword} name='confirmPassword' ></FormInput>
            <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;