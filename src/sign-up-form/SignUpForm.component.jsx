import { useState } from "react";

    
const defaultFormFields = {
    'displayName' : '',
    'email' : '',
    'password' : '',
    'confirmPassword' : ''
};
const SignUpForm = () => {


    const[formFields,setFormFields] = useState(defaultFormFields);
    const {displayName,email,password,confirmPassword} = formFields;
    console.log(formFields);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name] : value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const user = await createAuthUserWithEmailAndPassword(displayName,email,password);
    }

    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={() => {handleSubmit()}}>

            <label>Display Name</label>
            <input type="text" required onChange={handleChange}  value={displayName} name='displayName' ></input>

            <label>Email</label>
            <input type="email" value={email} onChange={handleChange} required name='email'></input>

            <label>Password</label>
            <input type="password" value={password} onChange={handleChange} required  name='password'></input>

            <label>Confirm Password</label>
            <input  type="password" value={confirmPassword} onChange={handleChange} required  name='confirmPassword'></input>
            <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;